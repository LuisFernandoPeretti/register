const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'Info@1234', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(function() {
    console.log('Conexão realizada com sucesso');
}).catch(function(err){
    console.log('Error ao realizar a conexao com o BD: ' + err);
});

/*
const User = sequelize.define('pagamentos', {
    nome: {
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.DOUBLE
    }
});

User.sync({force: true})
*/

const Pagamento = sequelize.define('pagamentos', {
    nome: {
        type: Sequelize.STRING,
    },
    valor: {
        type: Sequelize.DOUBLE
    }
});

Pagamento.create({
    nome: "Energia",
    valor: 220
})
