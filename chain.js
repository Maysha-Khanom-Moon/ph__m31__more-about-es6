// data access
const data = [ {id: 1, name: 'abul', address: 'kochu khet'} ]
console.log(data[0].address);


const products = {
    count: 5000,
    data: [
        { id: 1, name: 'lenovo laptop', price: 65000},
        { id: 2, name: 'macbook', price: 165000}
    ]
}
console.log(products.data[1].name);


const user = {
    id: 5001,
    name: 'Sharigul Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'no dorai'
        },
        city: 'Dhaka'
    }
}

// it's chain
console.log(user.address.street.second);


/**
 * -------- optional chain: ? ---------
 * 
 * ==> jodi oi street property thake, taile shamne agao. Otherwise undefined.
 */
const user2 = {
    id: 5002,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'bangladesh'
    }
}

console.log(user2.address.street?.second);