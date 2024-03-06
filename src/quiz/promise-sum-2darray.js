async function sum2DArray(array2D) {
    try {
        let total = 0;
        for (const array1D of array2D) {
            for (const num of array1D) {
                total += num;
            }
        }
        return total;
    } catch (err) {
        console.error(err);
    }
}