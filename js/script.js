

// let numberOfFilms;

// function start() {
//      numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');

//      while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms))  {

//         numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');
//      }
// }

// start();

// function rememberMyFilms() {
//     for (let i=0; i<2 ; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?','');
    
//         if (a != null && b!=null && a!='' && b!=''&& a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log ('Done!');
//         } else {
//             console.log('error');
//             i--;
//         }
        
//     }

// }
// // rememberMyFilms();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: true
// };



// function detectPersonalLevel() {
//     if (personalMovieDB.count <10) {
//         console.log ('Просмотрено мало фильмов');
    
//     } else if ( personalMovieDB.count >=10 && personalMovieDB.count <=30 ) {
//         console.log ('Вы классический зритель');
//     } else if ( personalMovieDB.count >30 ) {
//         console.log ('Вы  киноман');
//     } else {
//          console.log ('Произошла ошибка!');
//     };
// }

// // detectPersonalLevel();

// function showMyDB(hidden) {

//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i<=3;i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//         }
// }
// writeYourGenres();

const arr = [1,2,3,6,8];
// arr.pop();
// arr.push(10);
// arr.forEach(function(item,i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });
// // for(let i = 0; i<arr.length; i++) {
// //     console.log(arr[i]);
// // }
// for (let value of arr) {
//     console.log(value);
// }
const str = prompt("","");
const products = str.split(", ");
products.sort();
console.log(products.join('; '));
