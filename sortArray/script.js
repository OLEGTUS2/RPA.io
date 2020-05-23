const arr = [3, 7, 4, 9, 14, 6, 12, 1, 8];

const sortArr = (arr, direction) => (

    arr.sort((a, b) => {
        if (direction === 'ASC') {
            return a - b;
        } else if (direction === 'DESC') {
            return b - a;
        }
        return 0;
    })
)

console.log(sortArr(arr, 'DESC'));