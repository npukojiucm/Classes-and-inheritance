import Bowman from './Characters/Bowman';
import Daemon from './Characters/Daemon';
import Magician from './Characters/Magician';
import Swordsman from './Characters/Swordsman';
import Undead from './Characters/Undead';
import Zombie from './Characters/Zombie';

const zombie1 = new Zombie('Alex', 'Zombie');
zombie1.levelUp();
zombie1.damage(50);
console.log(zombie1);
