import Laptop from './laptop';
import Preferences from './preferences';

export default class List {
    private _laptopList: Laptop[] = [];
    private _userPref: Preferences;
    private _orderedList: {Laptop: Laptop, Score: Number}[];

    constructor (user: Preferences) {
        this._userPref = user;
    }

    newLaptop (laptop: Laptop) {
        this._laptopList.push(laptop);
    }

    compare () { // this function will weigh each laptop against user preference and push to _orderedList

    }    
}