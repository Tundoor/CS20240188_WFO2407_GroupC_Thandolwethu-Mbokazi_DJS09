"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var propertyContainer = document.querySelector('.properties');
var footer = document.querySelector('.footer');
var utils_1 = require("./utils");
var enums_1 = require("./enums");
// Reviews
// Using Any allows us to also account for the unkown property from perhaps an outside source
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: enums_1.LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: enums_1.LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: enums_1.LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
        desccription: 'Great hosts, location was a bit further than said'
    },
];
//Adds naam of user on the welcome page
var you = {
    firstname: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    permissions: enums_1.Permission.ADMIN,
    age: 23,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
//properties
// Array of Properties
var properties = [
    // The colombian Property 
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+1123495082908, 'marywinkle@gmail.com'], //tuple
        isAvailable: true
    },
    // The Poland property
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    // the london Property 
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+1123495082908, 'andyluger@aol.com'],
        isAvailable: true
    }
];
// This function is too make the user experience more personalized by displaying the users name on the website 
(0, utils_1.populateUser)(you.isReturning, you.firstname);
// This just shows uus whose reviewed what
(0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
// this loops through our propertie array and creates the dv you see on the UI 
for (var i = 0; i < properties.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    var image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    (0, utils_1.showDetails)(you.permissions, card, properties[i].price);
    propertyContainer.appendChild(card);
}
// Used a tuple to ensure that our array is always in the same format
var currentLocation = ['Durban', '13:35', 29];
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + "C";