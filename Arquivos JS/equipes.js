var equipes = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String
    },
    membros: [
        new Schema({
            _id: {
                type: Schema.Types.ObjectId,
                required: true
            },
            nome: {
                type: String,
                required: true
            },
            cargo: {
                type: String,
                required: true
            }
        })
    ],
    projetos: [
        new Schema({
            _id: {
                type: Schema.Types.ObjectId
            },
            nome: {
                type: String
            }
        })
    ]
});