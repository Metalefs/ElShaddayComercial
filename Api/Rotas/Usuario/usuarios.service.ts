const config = require('../../config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

import {Mongo} from '../../MongoDB/Mongo';
import {Collections} from '../../MongoDB/MongoCollections';


module.exports = {
    authenticate,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate(cliente : Collections.Cliente) {
    console.log('query:',{Email: cliente.Email});
    
    return await Mongo.BuscarUm(Collections.Cliente.NomeID, {Email: cliente.Email}).then((user: any) => {
        
        console.log('user:', user);
        
        if (user && bcrypt.compareSync(cliente.Senha, user.Senha)) {
            const token = jwt.sign({ sub: user._id }, config.secret, { expiresIn: '7d' });
            console.log("login com sucesso. token gerado", {...user,token});
            
            cliente.token = token;
            update(cliente._id,cliente);
            
            return {
                ...user,
                token
            };
        }
        if (!user) return {erro:'E-mail ou senha incorretos'};

    });
}

async function create(NovoCliente : Collections.Cliente) {
    // validate
    if (await Mongo.BuscarUm(Collections.Cliente.NomeID, {Email: NovoCliente.Email})) {
        return {erro:'E-mail "' + NovoCliente.Email + '" já está sendo usado!'};
    }

    // hash password
    if (NovoCliente.Senha) {
        NovoCliente.Senha = bcrypt.hashSync(NovoCliente.Senha, 10);
    }
    if(NovoCliente.Email && NovoCliente.Senha){
        // save user
        NovoCliente.DataCriacao = new Date();
        await Mongo.Insert(Collections.Cliente.NomeID, NovoCliente);
        console.log("usuário cadastrado");
    }else{
        console.log("usuário não cadastrado");
    }
}

async function getById(id:string) {
    return await Mongo.BuscarUm(Collections.Cliente.NomeID, {_id: id}) as Collections.Cliente;
}

async function update(id:string, cliente : Collections.Cliente) {
    const user = await getById(id);

    // validate
    if (!user) return {erro:'Usuário não encontrado'};
    if (user.Email !== cliente.Email && await Mongo.BuscarUm(Collections.Cliente.NomeID, { username: cliente.Email }) as Collections.Cliente) {
        return {erro:'E-mail "' + cliente.Email + '" já está sendo usado'};
    }

    // hash password if it was entered
    if (cliente.Senha) {
        cliente.Senha = bcrypt.hashSync(cliente.Senha, 10);
    }

    // copy userParam properties to user
    Object.assign(user, cliente);

    await Mongo.Edit(Collections.Cliente.NomeID, cliente._id, cliente);
}

async function _delete(id: string) {
    await Mongo.Remove(Collections.Cliente.NomeID, {_id : id});
}

// helper functions

function omitPassword(cliente: Collections.Cliente) {
    const { Senha, ...userWithoutPassword } = cliente;
    return userWithoutPassword;
}