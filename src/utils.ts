const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')
import { LoyaltyUser, Permission } from "./enums"

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = value.toString() + ' Review' + makeMultiple(value) + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning: boolean, firstname: string) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'Back'
    }
    userNameDisplay.innerHTML = firstname
}

export function showDetails(value: boolean | Permission, element: HTMLElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

export function makeMultiple(value: number): string {
    if (value > 1 || value == 0) {
        return 's'
    } else return ''
}