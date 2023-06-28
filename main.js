// const user = {
//   name: 'Diego',
//   idade: 27,
//   nickname:'Schell',
//   address: {
//     street: 'Rua teste',
//     number: 176,
//   },
// };

// function mostraIdade({idade}) {
//   return idade;
//}
// function mostraIdade(user) {        //É o mesmo que o codigo acima.
//   return user.idade;
// }

// const {name, idade, ...rest} = user;

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]    //Nos "arrays", e usado colchetes ao invez de chaves para fazer a desestruturação.

// const first = array[0];
// const second = array[1];

// const [first, second, ...rest] = array;  //É o mesmo que o de cima.

// const {address, idade: age, nickname = "Fernandes"} = user
// document.body.innerText = mostraIdade(user)
// document.body.innerText = JSON.stringify({address, age, nickname}



// const name = 'Diego';
// const age = 27;

// const user = {
//   name,
//   age,
// };


// const user = {
//   name: 'Diego',
//   age: 27,
//   nickname:'Schell',
//   address: {
//     street: 'Rua teste',
//     number: 176,
//       zip: {
//         code: '89160000',
//         city: 'Rio do Sul'
//       },
//       showFullAddress() {
//         return 'ok';
//       }
//   },
// };

// const key = 'state';



//metodos de arrya    (para lembrar de onde eu parei - tempo do video = 43:15)

document.body.innerText = user.address[key]