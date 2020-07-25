const config = require('config.json');
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
    const user = Mongo.BuscarUm(Collections.Cliente.NomeID, {Email: cliente.Email}) as Collections.Cliente;
    if (user && bcrypt.compareSync(cliente.Senha, user.Senha)) {
        const token = jwt.sign({ sub: user._id }, config.secret, { expiresIn: '7d' });
        return {
            ...user,
            token
        };
    }
    if (!user) throw 'E-mail ou senha incorretos';
}

async function create(NovoCliente : Collections.Cliente) {
    // validate
    if (await Mongo.BuscarUm(Collections.Cliente.NomeID, {Email: NovoCliente.Email}) as Collections.Cliente) {
        throw 'E-mail "' + NovoCliente.Email + '" já está sendo usado!';
    }

    // hash password
    if (NovoCliente.Senha) {
        NovoCliente.Senha = bcrypt.hashSync(NovoCliente.Senha, 10);
    }

    // save user
    await Mongo.Insert(Collections.Cliente.NomeID, NovoCliente );
}

async function getById(id:string) {
    return await Mongo.BuscarUm(Collections.Cliente.NomeID, {_id: id}) as Collections.Cliente;
}

async function update(id:string, cliente : Collections.Cliente) {
    const user = await getById(id);

    // validate
    if (!user) throw 'Usuário não encontrado';
    if (user.Email !== cliente.Email && await Mongo.BuscarUm(Collections.Cliente.NomeID, { username: cliente.Email }) as Collections.Cliente) {
        throw 'E-mail "' + cliente.Email + '" já está sendo usado';
    }

    // hash password if it was entered
    if (cliente.Senha) {
        cliente.Senha = bcrypt.hashSync(cliente.Senha, 10);
    }

    // copy userParam properties to user
    Object.assign(user, cliente);

    await Mongo.Edit(Collections.Cliente.NomeID, cliente);
}

async function _delete(id: string) {
    await Mongo.Remove(Collections.Cliente.NomeID, {_id : id});
}

// helper functions

function omitPassword(cliente: Collections.Cliente) {
    const { Senha, ...userWithoutPassword } = cliente;
    return userWithoutPassword;
}