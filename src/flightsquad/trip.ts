import { Airport } from "./airport";

export interface Trip {
    price: number;
    /** Should be in order of arrival
     *
     * e.g origin should be first stop,
     * destination should be last,
     * with layovers in between
     */
    stops: TripStop[];
    /** Search Provider (aka scraping module) */
    provider: SearchProviders;
}

export interface TripStop {
    stop: Airport;
    operator: string;
    flightNum: string;
    arrivalTime: string;
    departTime: string;
    duration: string;
}

/** Search Providers enabled
 *
 * Key is scraper module
 *
 * Value is key of scraper results in TripGroup object
 */
export enum SearchProviders {
    GoogleFlights = 'google',
    Kayak = 'kayak',
    Southwest = 'southwest',
}