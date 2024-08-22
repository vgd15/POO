import User from "./User.js";

export default class Docente extends User {
    constructor(nome, email, nascimento, role='docente', ativo=true ){
        super(nome, email, nascimento, role, ativo)
    }

    aprovaEstudante(estudante, curso){
        return `estudante ${estudante} aprovado no curso ${curso}`
    }
   
}

const novoDocente = new Docente('Rafaela', 'almeida@gmail.com', '1996/05/25')
//console.log(novoDocente)
//console.log(novoDocente.aprovaEstudante('Rafaela', 'Mídias Sociais'))