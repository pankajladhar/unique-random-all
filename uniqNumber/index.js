const uniqNumber = (obj) => {
    let minimum = (obj && obj.min) || 0;
    let maximum = ((obj && obj.max) || 100) + 1;
    let count = ( obj && obj.count) || 1;
    let sort = (obj && obj.sort);
    let sortValue = ['asc', 'desc'];

    let validate = () => {
        if(typeof minimum !== "number" || typeof maximum !== "number" || typeof count !== "number")
            throw new Error("Only number accepted"); 

        if (sort && sortValue.indexOf(sort) < 0)
            throw new Error("Value of `sort` should be either `asc` or `desc`");

        if (minimum > maximum)
            throw new Error("Value of `min` should be greater than `max`");

        if (maximum - minimum < count)
            throw new Error("Value of `count` should not be lesser than `max-min`");

        if (minimum === (maximum - 1))
            throw new Error("Incorrect `min` value beacuse its matching with default value of `max`");

        return true
    }

    const sortArray = (numArray) => {
        return sort === 'asc' ? numArray.sort((a, b) => a - b) : numArray.sort((a, b) => b - a)
    }

    const generateRandom = () => {
        let randomNumberArray = [];
        while (randomNumberArray.length < count) {
            let num = Math.floor(Math.random() * maximum)
            num > minimum && randomNumberArray.indexOf(num) === -1 && randomNumberArray.push(num)
        }
        return randomNumberArray
    }


    const doSort = (output) => {
        return sort ? sortArray(output) : output
    }


    if (validate()) {
        let output = generateRandom();
        return count !== 1 ? doSort(output) : output[0];
    }

}

export default uniqNumber;


