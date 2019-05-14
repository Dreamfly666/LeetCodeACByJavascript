// 605.Can Place Flowers
var canPlaceFlowers = function (flowerbed, n) {
    let max = 0
    if (flowerbed.length === 1 && flowerbed[0] === 0) return 1 >= n
    if (flowerbed.length === 1 && flowerbed[0] === 1) return 0 >= n
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            if (i === 0 && flowerbed[1] === 0) {
                max++
                i++
            } else if (i === flowerbed.length - 1 && flowerbed[flowerbed.length - 2] === 0) {
                max++
            } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                max++
                i++
            }
        }
    }
    return max >= n
}

// runtime 64ms beats 96.47% memory 36.3m beats 46.15%