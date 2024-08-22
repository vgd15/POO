import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    exibirInfos(){
       
         return `${this.nome}, ${this.email}}` //polimorfismo é diferenciar os comportamentos herdados, no caso aqui não queremos todos os parametros nessa função
        }

    criarCurso(nomeDoCurso, vagas){
        return `Curso de ${nomeDoCurso} criado com ${vagas}`
    }
}
const novoAdmin = new Admin ('Rodfrigo', 'deise@gmail.com', '1998/11/15')
//console.log(novoAdmin)
//console.log(novoAdmin.exibirInfos())

//console.log(novoAdmin.criarCurso('js', 20))