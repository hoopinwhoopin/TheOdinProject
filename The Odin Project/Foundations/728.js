// This function loads the product data from the file.
async function loadData() {
    const response = await fetch('data.txt');
    const data = await response.text();
    return data.split('\n').filter(Boolean).map(line => line.split('\t'));
}

// This function filters the products based on the provided keyword.
async function filterProducts() {
    const keyword = document.getElementById('keyword').value;
    const filteredProducts = document.getElementById('filteredProducts');
    filteredProducts.innerHTML = '';

    const data = await loadData();
    const products = {};

    for (const [product, info] of data) {
        products[product] = (products[product] || []).concat(info);
    }

    for (const product in products) {
        if (products[product].some(info => info.includes(keyword))) {
            const li = document.createElement('li');
            li.textContent = product;
            filteredProducts.appendChild(li);
        }
    }
}

document.getElementById('keyword').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        filterProducts();
    }
});