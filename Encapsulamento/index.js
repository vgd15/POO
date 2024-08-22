import User from "../Classes e herança/User.js";
import Admin  from "../Classes e herança/Admin.js";
import Docente from "../Classes e herança/Docente.js";

const novoUser = new User('Mariana', 'm@m.com', '1995-01-17');

//console.log(novoUser.exibirInfos())

const novoAdmin = new User('Rodrigo', 'r@r', '1989-11-15')

console.log(novoAdmin.nome)

novoAdmin.nome = ''

console.log(novoAdmin.nome)

