var usuarios = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    },
    equipes: [
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