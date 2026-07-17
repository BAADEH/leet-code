/**
 * @param {number[]} citations
 * @return {number}
 */

citations.sort((a, b) => b - a);

var hIndex = function(citations) {
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= citations.length - i) {
            return citations.length - i;
        }
    }
    return;
};