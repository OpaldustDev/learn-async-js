const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

// create Promise for each row, which resolves if the row contains a negative number
let promiseArray = array2D.map( row => 
    new Promise((resolve, reject) => {
        row.find(num => num < 0) ? resolve(row) : reject('No negative number');
    })
);

// execute all Promises concurrently and log each row that has at least one negative number
Promise.allSettled(promiseArray).then(results => 
    results.forEach(result => 
        result.status === 'fulfilled' && console.log(result.value)
    )
);