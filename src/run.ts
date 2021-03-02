import Preferences from './preferences';
import Laptop from './laptop';
import List from './laptopList';
import { question } from 'readline-sync';

 
function run () {
    console.log(`Hi I'm Laptop Picker!`);
    console.log('=========================');
    console.log('Tell me what you care about most in a laptop: Please follow the instructions below to set your laptop preferences! \n');

    const userPrefs = new Preferences;
    console.log('\n');
    let laptopNum = parseInt(question('How many laptops do you want to compare? \n'));

    for (let i = 0; i < laptopNum; i++) {
        let list = new List(userPrefs);
        list.newLaptop(new Laptop);
        console.log('\n');
    }

}

run();