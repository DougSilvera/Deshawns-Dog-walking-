/*

    This module contains all of the data, or state, for the
    application. It exports two functions that allow other
    modules to get copies of the state.

*/
const database = {
    walkers: [{
        id: 1,
        name: "Alphonse Meron",
        email: "ameron0@mashable.com",
        walkerCityId: 1
    }, {
        id: 2,
        name: "Damara Pentecust",
        email: "dpentecust1@apache.org",
        walkerCityId: 2
    }, {
        id: 3,
        name: "Anna Bowton",
        email: "abowton2@wisc.edu",
        walkerCityId: 3
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        email: "hdrynan3@bizjournals.com",
        walkerCityId: 4
    }, {
        id: 5,
        name: "Elmira Bick",
        email: "ebick4@biblegateway.com",
        walkerCityId: 5
    }, {
        id: 6,
        name: "Bernie Dreger",
        email: "bdreger5@zimbio.com",
        walkerCityId: 6
    }, {
        id: 7,
        name: "Rolando Gault",
        email: "rgault6@google.com",
        walkerCityId: 7
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        email: "ttubby7@intel.com",
        walkerCityId: 8
    }, {
        id: 9,
        name: "Tomlin Cutill",
        email: "tcutill8@marketwatch.com",
        walkerCityId: 9
    }, {
        id: 10,
        name: "Arv Biddle",
        email: "abiddle9@cafepress.com",
        walkerCityId: 10
    }],
    pets: [{
        id: 1,
        name: "Dianemarie Hartness",
        walkerId: 3
    }, {
        id: 2,
        name: "Christoph Fosdyke",
        walkerId: 10
    }, {
        id: 3,
        name: "Rocket",
        walkerId: 7
    }, {
        id: 4,
        name: "Ebony",
        walkerId: 3
    }, {
        id: 5,
        name: "Scotty",
        walkerId: 8
    }, {
        id: 6,
        name: "Mac",
        walkerId: 2
    }, {
        id: 7,
        name: "Oreo",
        walkerId: 5
    }, {
        id: 8,
        name: "Sassy",
        walkerId: 1
    }, {
        id: 9,
        name: "Salem",
        walkerId: 9
    }, {
        id: 10,
        name: "Panda",
        walkerId: 7
    }],
    cities: [{
        cityId: 1,
        name: "Chicago"
    },{
        cityId: 2,
        name: "White Plains"
    },{
        cityId: 3,
        name: "Sarasota"
    },{
        cityId: 4,
        name: "San Diego"
    },{
        cityId: 5,
        name: "Boise"
    },{
        cityId: 6,
        name: "Denver"
    },{
        cityId: 7,
        name: "Tucson"
    },{
        cityId: 8,
        name: "Pheonix"
    },{
        cityId: 9,
        name: "Minneapolis"
    },{
        cityId: 10,
        name: "Pittsburgh"
    }]

}

export const getWalkers = () => {
    return database.walkers.map(walker => ({...walker}))
}

export const getPets = () => {
    return database.pets.map(pet => ({...pet}))
}

export const getCities = () => {
    return database.cities.map(city => ({...city}))
}


//   Chicago
// White Plains
// Sarasota
// San Diego
// Boise
// Denver
// Tucson
// Phoenix
// Minneapolis
// Pittsburgh