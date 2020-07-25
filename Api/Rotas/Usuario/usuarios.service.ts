// const config = require('config.json');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// // users hardcoded for simplicity, store in a db for production applications
// const users = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];

// class User {
//     username:string;
//     password:string;
//     hash: string;
//     createdDate:Date;
    
//     constructor(username:string,password:string,
//         hash: string,
//     createdDate:Date){
//         this.username = username;
//         this.password = password;
//         this.hash = hash;
//         this.createdDate = createdDate;
//     }
// };

// module.exports = {
//     authenticate,
//     getAll,
//     getById,
//     create,
//     update,
//     delete: _delete
// };
// async function authenticate(User : User) {
//     const user = users.find(u => u.username === User.username && u.password === User.password);
//     // if (user && bcrypt.compareSync(password, user.hash)) {
//     //     const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });
//     //     return {
//     //         ...user.toJSON(),
//     //         token
//     //     };
//     // }
//     if (!user) throw 'Username or password is incorrect';

//     // create a jwt token that is valid for 7 days
//     const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '7d' });

//     return {
//         ...omitPassword(user),
//         token
//     };
// }

// async function getAll() {
//     return users.map(u => omitPassword(u));
// }


// async function getById(id:string) {
//     return await User.findById(id);
// }

// async function create(newuser: User) {
//     // validate
//     if (await User.findOne({ username: newuser.username })) {
//         throw 'Username "' + newuser.username + '" is already taken';
//     }

//     const user = new User(newuser);

//     // hash password
//     if (newuser.password) {
//         user.hash = bcrypt.hashSync(newuser.password, 10);
//     }

//     // save user
//     // await user.save();
// }

// async function update(id, userParam) {
//     const user = await User.findById(id);

//     // validate
//     if (!user) throw 'User not found';
//     if (user.username !== userParam.username && await User.findOne({ username: userParam.username })) {
//         throw 'Username "' + userParam.username + '" is already taken';
//     }

//     // hash password if it was entered
//     if (userParam.password) {
//         userParam.hash = bcrypt.hashSync(userParam.password, 10);
//     }

//     // copy userParam properties to user
//     Object.assign(user, userParam);

//     //await user.save();
// }

// async function _delete(id) {
//     await User.findByIdAndRemove(id);
// }

// // helper functions

// function omitPassword(user) {
//     const { password, ...userWithoutPassword } = user;
//     return userWithoutPassword;
// }