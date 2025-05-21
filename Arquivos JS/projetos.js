var projetos = new Schema({
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
    dataInicio: {
        type: Date,
        required: true
    },
    tarefas: [
        new Schema({
            _id: {
                type: Schema.Types.ObjectId
            },
            titulo: {
                type: String
            },
            status: {
                type: String
            }
        })
    ]
});