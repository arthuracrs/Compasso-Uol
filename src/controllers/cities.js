module.exports = {
    create: (req, res)=>{
        res.status(201).send('Cidade criada com sucesso!')
    },
    getOne: (req, res)=>{
        res.status(201).send('Cidade buscada com sucesso!')
    },
    update: (req, res)=>{
        res.status(201).send('Cidade atualizada com sucesso!')
    },
    destroy: (req, res)=>{
        res.status(201).send('Cidade deletada com sucesso!')
    }
}