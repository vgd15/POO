const user = {
    nome: "Juliana",
    email:"deise@gmail.com",
    nascimento:"15/11/1998",
    role:"estudante",
    ativo:true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

//user.exibirInfos()

const exibir = function(){
    console.log(this.nome)
}
exibir()
// vai dar erro pois está sem contexto

const exibirNome = exibir.bind(user);
exibirNome() 

//aqui estou ligando a variável axibir no valor do contexto "user".


const admin = {
    nome:"Mariana",
    email:"rafaela@gmail.com",
    role:"admin",
    criarCursos(){
        console.log("Curso criado")
    }
}


Object.setPrototypeOf(admin, user); 
//primeiro parâmetro o objeto que vai herdar propriedades (admin) e o segundo parâmetro o objeto que vai dar (user)

admin.criarCursos()
admin.exibirInfos() // propriedade herdada de user

