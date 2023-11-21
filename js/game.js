// помилки

// const runWithEror = () => {
//    throw new Error('some error')
// }

// try{
//    runWithEror()
// } catch(error){
//    console.log(error.messege)

// }


// console.log('Continue...')

// інструкції 

// const a = 10;
// const b = 5;

// if (a !== b){
//    console.log('it`s true')
// } else {
//    console.log('no is not true')
// }

// function myFn(a){
//    console.log(a);
// }


// const b = true;
// let c = 10;


// myFn(3+2)
// myFn(b)
// myFn(c=c+1)
// myFn(c=c+1) 
// myFn(let b)


//  масиви 
// const myArray = [1,false,'Roman']
// console.log(myArray)

// const myArray2 = [1,false,'Roman']
// console.log(myArray2)

// if (myArray === myArray2){
//     console.log(true)
// }else{
//     console.log(false)
// }


// const myArray = [1,2,3,4,5,10]




//  const newArray = myArray.map(function (el) {return el * 3})

// console.log(newArray)
// console.log(myArray)


// const userProfile = {
//     name: 'Roman',
//     commentsQty: 23,
//     hasSigned: false,
// }



// const first = ['roman', 'yana', 'olga']

// const [firstName] = first;
// console.log(firstName)


// const userProfile = {
//     name: 'Roman',
//     commentsQty: 23,
//     hasSigned: false,
// }

// const userProf = ({name, commentsQty}) => {
//     if(!commentsQty){
//         return `User ${name} has no comants`
//     } 
//     return `User ${name} has ${commentsQty} comants`
// }

// userProf(userProfile)


// console.log(userProf(userProfile))

// let val = 10;

// if (val > 11) {
//     val += 20
// }

// console.log(val)


// const person = {
//     name: 'Roman',
//     age: 27,
// }

// if (!person.name){
// console.log('ім`я не вказано') 
// } else{
//     console.log(' вказано') 
// }
 

// const age = 15;

// if(age >= 18){
//     console.log('is adult')
// } 

// if (age >= 12 && age < 18){
//     console.log('is tenneger')
    
// }
// if(age < 12) {
//     console.log('is child')
// };



const openModal = document.querySelector('.modal-open');
const modalclick = document.querySelector('.modal');
const modalclose = document.querySelector('.modal-close');
const submit = document.querySelector('.submit');
const login = document.querySelector('.login');
const pass = document.querySelector('.password');


openModal.addEventListener('click', ()=>{
    modalclick.classList.toggle('is-active');
})

modalclose.addEventListener('click', ()=>{
    modalclick.classList.remove('is-active');
})

submit.addEventListener('click', ()=>{
console.log('submit')
})



