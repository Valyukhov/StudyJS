

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count <10) {
    console.log ('Просмотрено мало фильмов');

} else if ( personalMovieDB.count >=10 && personalMovieDB.count <=30 ) {
    console.log ('Вы классический зритель');
} else if ( personalMovieDB.count >30 ) {
    console.log ('Вы  киноман');
} else {
     console.log ('Произошла ошибка!');
};


for (let i=0; i<2 ; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?','');

    if (a != null && b!=null && a!='' && b!=''&& a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log ('Done!');
    } else {
        console.log('error');
        i--;
    }
    
}


console.log (personalMovieDB);

// function showFirstMessage(text) {
//     console.log(text);
//     let num=20
// }

// showFirstMessage('444444444444444')

// const logger  = function (){

//     console.log('Hello');
// };
// logger();

// const calc = (a, b) => {return a + b};
const str = 'test';
let str1='io';
console.log(str1 = str.toUpperCase());

console.log(str);
console.log(str1);

const fruit = 'Some fruit';
console.log(fruit.indexOf("fruit"));

const logg = "Hello world!";
console.log(logg.slice(6));
console.log(logg.substring(6,11));
console.log(logg.substr(6,3));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log (parseFloat(test));