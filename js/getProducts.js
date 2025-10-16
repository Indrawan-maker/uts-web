
async function getProducts() {
    const res = await fetch('../data/products.json')
    const products = await res.json()
    console.log(products.map(product => product.id))
    console.log(products)
}

getProducts()