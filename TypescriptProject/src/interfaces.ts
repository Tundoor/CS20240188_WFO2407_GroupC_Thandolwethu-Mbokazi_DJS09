import { LoyaltyUser } from './enums'
import { Price, Country } from './types'

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}

export interface Property {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;git config--global user.email "you@example.com"
  git config--global user.name "Your Name"
city: string;
code: number | string;
country: Country
    }
contact: [number, string];
isAvailable: boolean;
}
