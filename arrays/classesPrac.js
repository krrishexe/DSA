class Weapon{
    constructor(name,damage,weight){
        this.name = name;
        this.damage = damage;
        this.weight = weight;
    }
    slashDamage(){
        console.log(`slashDamage is : ${this.damage}`);
    }
    pierceDamage(){
        console.log(`pierceDamage is : ${this.damage + 50}`);
    }
}

const WeaponOne = new Weapon('Sword',100,20)
const WeaponTwo = new Weapon('Hammer',150,20)
// console.log(WeaponOne.slashDamage())
// console.log(WeaponOne.pierceDamage())

class Bomb extends Weapon{
    constructor(name ,damage,weight){
        super(name,damage,weight)
    }
    areaCovered(area){
        console.log(`Area covered by ${this.name} is : ${area}`)
    }
}

const weaponthree = new Bomb('Ooze',50,2)
// weaponthree.areaCovered(20)
console.log(weaponthree instanceof Bomb)