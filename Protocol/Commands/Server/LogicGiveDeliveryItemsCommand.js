const PiranhaMessage = require('../../PiranhaMessage')

class LogicGiveDeliveryItemsCommand extends PiranhaMessage {
  constructor (client, name) {
    super()
    this.id = 24111
    this.client = client
    this.version = 0
    this.name = name
  }

  async encode () {
    const reward = this.generateReward()

    this.writeVInt(203)

    this.writeVInt(reward.rarity) // Rarity
    reward.dataRef[0] == 5 ? this.writeDataReference(5, 6) : this.writeDataReference(0, 0) // Gotcha
    this.writeVInt(reward.amount) // Amount
    reward.dataRef[0] == 23 ? this.writeDataReference(23, reward.dataRef[1]) : this.writeVInt(0)
  }

  generateReward(){
    const elixir = [1, 2, 5, 10]
    const brawlers = [
        [0, 4, 12, 28, 32, 36, 40],
        [8, 16, 24, 52],
        [44, 56, 60, 64],
        [20, 48]
    ]
    let result = {dataRef: [0, 0], amount: 1, rarity: 0}
    
    if(this.random(0, 1) == 0){
        const brawlerRarity = this.choose(brawlers)
        result.rarity = brawlers.indexOf(brawlerRarity)
        result.dataRef = [23, this.choose(brawlerRarity)]
    }else{
        const elixirRarity = this.choose(elixir)
        result.amount = elixirRarity
        result.rarity = elixir.indexOf(elixirRarity)
        result.dataRef = [5, 6]
    }
    
    return result
  }

  random(min, max) {return Math.round(Math.random() * (max - min)) + min}

  choose(array){
    return array[this.random(0, array.length - 1)]
  }
}

module.exports = LogicGiveDeliveryItemsCommand