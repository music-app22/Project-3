const db = require('../models');

let musicSeed = [
    {
        artist: "Elton John",
        title: "Can You Feel The Love Tonight",
        ratings: 4
    },
    {
        artist: "Boy George",
        title: "Karma Chameleon",
        ratings: 5
    },
    {
        artist: "Maroon 5",
        title: "Sugar",
        ratings: 5
    },
    {
        artist: "Lady Gaga",
        title: "Poker Face",
        ratings: 3
    },
    {
        artist: "Radioactive Chicken", 
        title: "Bad Egg",
        ratings: 5
    },
    {
        artist: "Spice Girls",
        title: "Wannabe",
        ratings: 2
    },

        artist: "Green Day",
        title: "When September Ends",
        ratings: 1
    },
    {
        artist: "Backstreet Boys",
        title: "I Wanted That Way",
        ratings: 3
    },
    {
        artist: "Michael Jackson",
        title: "Beat It",
        ratings: 2
    },
    {
        artist: "Jason Mraz",
        title: "I'm Yours",
        ratings: 3
    },
];

let userSeed = [
    {
        firstName: "Edmund",
        lastName: "Wellington"
        email: "mockery@aol.com"
        password: "admin123"
    },
    {
        firstName: "Elizabeth",
        lastName: "Montezuma"
        email: "janesmith@gmail.com"
        password: "secretL1f3"
    },
    {
        firstName: "Tyler",
        lastName: "Spudinator"
        email: "spudfinder@hotpotato.com"
        password: "hashfries"
    },
    {
        firstName: "Aaron",
        lastName: "Cohen"
        email: "radioactive@chicken.com"
        password: "badegg"
    
    }
];

async function makeData(Model, data) {
    var promises = [];
    for (var i = 0; i < data.length; i++) {
        promises.push(Model.create(data[i]));
    }
    var items = await Promise.all(promises);
    return items;
}
db.sequelize.sync({force:true}).then(async function () {
    await makeData(db.music, music);
    await makeData(db.users, users);
    await makeData(db.ratings, ratings);
    db.sequelize.close();
})