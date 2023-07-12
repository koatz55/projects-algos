class Assassin{
    constructor(name){
        this.name = name
        this.direct_report = null        
    }
}

class king{
    constructor(name, kingdom){
        this.name = name
        this.kingdom = kingdom
        this.head_assassin = null
        this.count = 0
    }
}