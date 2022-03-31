// works for any amount of any type of dice (e.g. 3d8 5d12 ...)

function rollDice(d) {
    let results = []

    // code for multiple sets of dice
    if (d.match(/[^d0-9]/g)) { // checks for multiple dice to roll
        d = d.replace(/[^d0-9]/g, ' ') // replaces any non-dice related character with white space
        d = d.split(d.match(/[^a-z0-9]/g)[0]).filter(n => n !== '') // splits string by whitespace, filters out empty elements that are created
        for (let i = 0; i < d.length; i++) { // looping through all dice sets
            let temp = []
            if (d[i][0] === 'd') { // edge case of no number in front, assumes 1
                d[i] = 1 + d[i]
            }
            d[i] = d[i].split('d') // split into number of dice and type
            for (let j = 0; j < d[i][0]; j++) { // rolls dice
                temp.push(Math.floor(Math.random() * d[i][1]) + 1) // pushing results to a temporary array for formating
            }
            results.push(`${d[i][0]}d${d[i][1]}: ` + temp.join(', ')) // formating results
        }
        return results.join('\n') // returns formatted results
    }

    // code for single set of dice
    if (d[0] === 'd') { // edge case of no number in front, assumes 1
        d = 1 + d
    }
    d = d.split('d') // split into number of dice and type
    for (let i = 0; i < d[0]; i++) { // rolls dice
        results.push(Math.floor(Math.random() * d[1]) + 1)
    }
    return `${d[0]}d${d[1]}: ` + results.join(', ') // returns formatted result
}

console.log(rollDice("3d8 4d6"))