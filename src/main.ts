import express from 'express';
import { db, firestore } from '../banco_de_dados/firebase';

const app = express();

app.use(express.json())

app.get("/",(req, res) =>{
    res.send("Bem vindo a minha primeira API sua corna KAKAKAKAK!")
});

app.post("/usuario", async (req, res)=> {
    const nome  = req.body.nome
    const email = req.body.email
    const numero = req.body.numero

    try {
        const docRef = await firestore.addDoc(firestore.collection(db, "usuarios"), {
             nome: nome,
            email: email,
            numero: numero,
        })
        res.send(docRef.id)
    } catch (e) {
        console.log(e) 
        res.status(500).send(e)
    }

})
app.get("/listarUsuarios", async (req,res)=> {

    try {
        const usuarios = await firestore.getDocs(firestore.collection(db, 'usuarios'))

        const usuarioslista = usuarios.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
        }))
        res.send(usuarioslista)
    } catch (e) {
        console.log("erro ao lista usuários:" + e)
        res.status(500).send("erro ao listar usuários:" + e)
        
    }
    })

    app.put("/atualizarUsuarios/:id", async (req, res)=> {
        const id = req.params.id
        const nome = req.body.nome

        try {
            await firestore.updateDoc(firestore.doc(db, "usuarios, id"), {
                nome: nome,
            })
            res.send("Usuário atualizado com sucesso!")
        } catch (e) {
            console.log("Erro ao atualizar usuário: "+ e)

           res.status(500).send("erro ao atualizar usuários:" + e)
        }
    })

app.listen(3000,function() { 
 console.log("serviço rodando em http://localhost:3000")
});
