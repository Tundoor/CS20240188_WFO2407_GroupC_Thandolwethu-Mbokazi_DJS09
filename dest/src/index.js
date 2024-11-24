import { showReviewTotal, populateUser } from "./utils.ts";
let isOpen;
const reviews = [
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
];
showReviewTotal(3, 2, 0);
//Adds naam of user on the welcome page
const you = {
    firstname: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 23,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
populateUser(you.isReturning, you.firstname);
