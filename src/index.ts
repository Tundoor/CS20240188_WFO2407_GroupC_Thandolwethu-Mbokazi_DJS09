
const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')

import { showReviewTotal, populateUser, showDetails, getTopTwoReviews } from "./utils"
import { Permission, LoyaltyUser } from "./enums"
import { Country, Price } from "./types"
// Reviews

// Using Any allows us to also account for the unkown property from perhaps an outside source
const reviews: any[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
        desccription: 'Great hosts, location was a bit further than said'
    },
]
//Adds naam of user on the welcome page

const you = {
    firstname: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    permissions: Permission.ADMIN,
    age: 23,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}
//properties

// Array of Properties

const properties: {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: Country;
    };
    // Takes a number and a string as values
    contact: [number, string];
    isAvailable: boolean;
}[] = [
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
            price: 30,
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
            price: 45,
            location: {
                firstLine: 'flat 15',
                city: 'London',
                code: 35433,
                country: 'United Kingdom',
            },
            contact: [+1123495082908, 'andyluger@aol.com'],
            isAvailable: true
        }
    ]

// This function is too make the user experience more personalized by displaying the users name on the website 
populateUser(you.isReturning, you.firstname)
// This just shows uus whose reviewed what
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

// this loops through our propertie array and creates the dv you see on the UI 
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    showDetails(you.permissions, card, properties[i].price)
    propertyContainer.appendChild(card)
}

let count = 0
function addReviews(array: {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}[]): void {
    if (!count) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button)
    }
}

button.addEventListener('click', () => addReviews(reviews))

// Used a tuple to ensure that our array is always in the same format
let currentLocation: [string, string, number] = ['Durban', '13:35', 29]
footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + "C"