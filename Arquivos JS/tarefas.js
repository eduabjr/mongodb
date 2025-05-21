var tarefas = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String
    },
    status: {
        type: String,
        enum: [
            "pendente",
            "em andamento",
            "concluida"
        ],
        required: true
    },
    "prioridade ": {
        type: String,
        enum: [
            "baixa",
            "media",
            "alta"
        ],
        required: true
    }
});