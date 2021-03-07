import { question } from 'readline-sync';


export default class Laptop {
    name: string;
    cpuScore: number;
    batteryScore: number;
    screenScore: number;
    ioScore: number;
    osScore: number;
    keyboardScore: number;
    trackpadScore: number;
    vibe: number;

    constructor () {
        this.name = question('Enter a laptop name: ');
        console.log(`Now give ${this.name} a score out of 10 for each of its components (10 being highest)...`);
        this.valueCheck(this.cpuScore, '\n1. How well does the laptop perform? ');
        this.valueCheck(this.batteryScore, '\n2. How long does the battery last? ');
        this.valueCheck(this.screenScore, '\n3. How good is its screen? ');
        this.valueCheck(this.ioScore, '\n4. Does it have good connectivity? ');
        this.valueCheck(this.osScore, '\n5. How much do you like the OS? ');
        this.valueCheck(this.keyboardScore, '\n6. How good is its keyboard? ');
        this.valueCheck(this.trackpadScore, '\n7. How good is its trackpad? ');
        this.valueCheck(this.vibe, '\n8. How premium does the laptop look and feel? ');
    }

    private valueCheck (param, string: string) {
        let ans = parseInt(question(string));
        while (ans > 10 || ans < 1) {
            ans = parseInt(question('Please enter a value between 1 and 10...'));
        }
    }
}