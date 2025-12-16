function maxProfit(prices) {
    let compro = prices[0]
    let profit = 0

    for (let i = 1; i < prices.length; i++) {
        let venta = prices[i]
        let result = venta - compro
        console.log(result)
        if (result >= profit) {
            profit = result
        }

        if (compro > venta) {
            compro = prices[i]
            console.log(compro)
        }

    }
    return profit
}