//usando class para faezr usuário


export default class User{ // colocando o export default nós estamos trabalhando com herança de classe
    #nome 
    #email 
    #nascimento 
    #role 
    #ativo
    constructor(nome, email, nascimento, role, ativo=true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento,
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    get nome(){
        return this.#nome //nunca recebem argumento, só retornam
    }

    get email(){
        return this.#email //nunca recebem argumento, só retornam
    }

    get nascimento(){
        return this.#nascimento //nunca recebem argumento, só retornam
    }

    get role(){
        return this.#role //nunca recebem argumento, só retornam
    }

    get ativo(){
        return this.#ativo //nunca recebem argumento, só retornam
    }

    set nome(novoNome){ //O set trabalha dentro do princípio do encapsulamento, o encapsulamento é esconder propriedades e métodos
        if(novoNome === '' ){
            throw new Error('Formato não válido')
        }
        this.#nome = novoNome
    }

    /*
    #montaObjUser(){
        return(
            {
                nome: this.#nome,
                email: this.#email,
                nascimento: this.#nascimento,
                role: this.#role,
                ativo: this.#ativo,
            }
        )        
    }
    */

   exibirInfos(){
   // const objUser = this.#montaObjUser()
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}` // se refere ao get e não ao construtor, pois lá está privado
   }
}

const novoUser = new User('Juliana', 'j@j.com', '1998/11/15')

//console.log(novoUser)
//console.log(novoUser.exibirInfos())