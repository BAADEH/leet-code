/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxPrice = 0;
    for (let i = 1; i < prices.length; i++){
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else{
            let topPrice = prices[i] - minPrice;
            if (topPrice > maxPrice) {
                maxPrice = topPrice
            }
        }
       
    }
    return maxPrice;

    
    
};