

let numberOfFilms;

function start() {
     numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');

     while (numberOfFilms == ''|| numberOfFilms == null || isNaN(numberOfFilms))  {

        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');
     }
}

start();

function rememberMyFilms() {
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

}
// rememberMyFilms();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};



function detectPersonalLevel() {
    if (personalMovieDB.count <10) {
        console.log ('Просмотрено мало фильмов');
    
    } else if ( personalMovieDB.count >=10 && personalMovieDB.count <=30 ) {
        console.log ('Вы классический зритель');
    } else if ( personalMovieDB.count >30 ) {
        console.log ('Вы  киноман');
    } else {
         console.log ('Произошла ошибка!');
    };
}

// detectPersonalLevel();

function showMyDB(hidden) {

    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i<=3;i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
        }
}
writeYourGenres();


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

const {border, bg} = options.colors;



// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;
// console.log(options);

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`); 
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
    
// }
