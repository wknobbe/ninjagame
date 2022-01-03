
class Ninja {
    constructor(name){
        this.name = name
        this.health = 100
        this.strength = 3
        this.speed = 3
    }
    sayName(){
        console.log('My name is',this.name +'.')
    }
    showStats(){
        console.log('Name:', this.name+ ', Health:',this.health+', Strength:',this.strength+', Speed:',this.speed)
    }
    drinkSake(){
        console.log('...drinks sake.')
        this.health += 10
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name)
        this.health = 200
        this.wisdom = 10
    }
    showWisdom(){
        console.log('My wisdom is:', this.wisdom)
    }
    speakWisdom(){
        this.drinkSake()
        console.log('What one programmer can do in one month, two programmers can do in two.')
    }
}

const ninja1 = new Ninja('Bob')
const superSensei = new Sensei('Tom')
ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.showStats()
superSensei.showStats()
superSensei.showWisdom()
superSensei.speakWisdom()
superSensei.showStats()
