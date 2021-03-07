import { question } from 'readline-sync';

export default class Preferences {
    cpu: number;
    battery: number;
    screen: number;
    io: number;
    os: number;
    keyboard: number;
    trackpad: number;
    vibe: number; 

    constructor () {
        console.log('Please assign a value to each of the following laptop features between 1 and 5, 1 being least important to you and 5 being most (you may assign the same value to multiples features)... \n');
        this.valueCheck(this.cpu, '1. How much do you value processing power? ');
        this.valueCheck(this.battery, '\n2. How much do you value battery life? ');
        this.valueCheck(this.screen, '\n3. How much do you value a good quality screen? ');
        this.valueCheck(this.io, '\n4. How much do you value ports and connectivity? ');
        this.valueCheck(this.os, '\n5. How important is the computers operating system? ');
        this.valueCheck(this.keyboard, '\n6. How important is a good typing experience? ');
        this.valueCheck(this.trackpad, '\n7. How important is a good trackpad? ');
        this.valueCheck(this.vibe, '\n8. How important is the look and feel of the laptop? ');
    }

    private valueCheck (param, string: string) {
        let ans = parseInt(question(string));
        while (ans > 5 || ans < 1) {
            ans = parseInt(question('Please enter a value between 1 and 5: '));
        }
        param = string;
    }
}