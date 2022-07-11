// Importando bibliotécas
const chalk = require('chalk');

//função para adicionar a lógica do projeto
const main  = () => {
    console.log(chalk.magenta("Curso JavaScript"));

    //Tratamento de erros e exceções
    try{
        let divisor = 2;    
        try {
            if (divisor <= 0){
                throw new Error("Menor ou igual a zero");
            }
            
            if (!isNaN(divisor)){
            console.log(1/divisor);
            } else {
            throw new Error(divisor + " Não é um número");
            } 
        
        }catch (error) {
            throw new Error(`Divisor ${divisor}: ${error}`);
        } finally {
            console.log("Fim!");
        }
    } catch (error) {
        console.log(error);
    };
    
};

debugger;

//Exportando a função
module.exports = {main};