const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')

const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;

}[

] = [
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


function populateUser(isReturning: boolean, firstname: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'Back'
    }
    userNameDisplay.innerHTML = firstname
}

populateUser(you.isReturning, you.firstname)
