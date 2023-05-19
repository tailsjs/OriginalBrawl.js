const parse = require("./CSVParser")
const data = parse("./CSVParser/CSV/csv_logic/cards.csv")

function getBrawlersUnlocks(){
    return data.filter(e => e.NumCards == 1).map(e => data.indexOf(e))
}

function getBrawlersUpgrades(){
    return data.filter(e => e.NumCards == 5).map(e => data.indexOf(e))
}

module.exports = {
    getBrawlersUnlocks,
    getBrawlersUpgrades
}