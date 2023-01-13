export default class Character {
  constructor(name, type) {
    this.name = name = (() => {
      if (name.length >= 2 && name.length <= 10) return name;
      throw new Error('Недопустимая длина имени (min - 2, max - 10');
    })();
    this.type = this.checkType(type);
    this.health = 100;
    this.level = 1;
    this.attack = this.correctType()[this.type].attack;
    this.defence = this.correctType()[this.type].defence;
  }

  correctType() {
    return {
      Bowman: {
        name: 'Bowman',
        attack: 25,
        defence: 25,
      },
      Swordsman: {
        name: 'Swordsman',
        attack: 40,
        defence: 10,
      },
      Magician: {
        name: 'Magician',
        attack: 10,
        defence: 40,
      },
      Daemon: {
        name: 'Daemon',
        attack: 10,
        defence: 40,
      },
      Undead: {
        name: 'Undead',
        attack: 25,
        defence: 25,
      },
      Zombie: {
        name: 'Zombie',
        attack: 40,
        defence: 10,
      },
    };
  }

  checkType(type) {
    if (this.correctType()[type] !== undefined) return this.correctType()[type].name;
    throw new Error('Неверный класс');
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack += (this.attack * 0.2);
      this.defence += (this.defence * 0.2);
      return;
    }
    throw new Error('Нельзя повысить урровень умершего');
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
      return this.health;
    }
    throw new Error('Герой мёртв. Нельз нанести урон');
  }
}
