const sumArray = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0);
};

const compute = async (array2D) => {
    // Map each sub-array to a Promise that will compute the sum of its elements
    const promises = array2D.map(row => Promise.resolve(sumArray(row)));

    // Use Promise.all() to wait for all Promises to resolve
    // The resolved value of Promise.all() will be an array of the sums of each sub-array
    let sums = await Promise.all(promises);

    // Compute the total sum of all sub-array sums
    let totalSum = sumArray(sums);

    return totalSum;
};

// Usage
compute(array2D).then(sum => console.log(sum));