const db = require('./db')

const Pagamento = db.sequelize.define('pagamentos',{
    nome: {
        type: db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.DOUBLE
    }
})

// Apagar tabela já existente e criar outra vazia
//Pagamento.sync({force: true})

module.exports = Pagamento