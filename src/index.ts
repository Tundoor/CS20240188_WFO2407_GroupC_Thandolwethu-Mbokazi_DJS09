const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')

const propertyContainer = document.querySelector('.properties')

// Reviews
const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string
}[] = [
        {
            name: 'Sheia',
            stars: 5,
            loyaltyUser: true,
            date: '01-04-2021'
        },
        {
            name: 'Andrzej',
            stars: 3,
            loyaltyUser: false,
            date: '28-03-2021'
        },
        {
            name: 'Omar',
            stars: 4,
            loyaltyUser: true,
            date: '27-03-2021'
        },
    ]

// This just shows uus whose reviewed what

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)


//Adds naam of user on the welcome page
const you: {
    firstname: string;
    lastName: string;
    isReturning: true;
    age: number;
    stayedAt: string[];

} = {
    firstname: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 23,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// This function is too make the user experience more personalized by displaying the users name on the website 
function populateUser(isReturning: boolean, firstname: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'Back'
    }
    userNameDisplay.innerHTML = firstname
}

populateUser(you.isReturning, you.firstname)

//properties

// Array of Properties
const properties: {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
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
    ]

// this loops through our propertie array and creates the dv you see on the UI 
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer.appendChild(card)
}