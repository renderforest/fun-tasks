const IMAGE = [
    [7, 4, 0, 1],
    [5, 6, 2, 2],
    [6, 10, 7, 8],
    [1, 4, 2, 0]
]

function solution(image) {
    const rowPossibleSubs = image[0].length - 2
    const colPossibleSubs = image.length - 2
    const result = []
    for(let i = 0; i < colPossibleSubs; i++) {
        result[i] = []
        for(let j = 0; j < rowPossibleSubs; j++ ) {
            let sum = 0
            for(let k = i; k < i + 3; k++) {
                for(let g = j; g < j + 3; g++) {
                    sum += image[k][g]
                }
            }
            result[i][j] = Math.floor(sum/9)
        }
    }
    return result
}

console.log(solution(IMAGE))

