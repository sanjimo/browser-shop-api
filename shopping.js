//global initialization
const nameField = document.getElementById('name');
const priceField = document.getElementById('price');
const ul = document.getElementById('product-list');

//addToCart function
const addToCart = () => {
    const name = nameField.value;
    const price = priceField.value;

    if (!name || !price) {
        return;
    }

    if (name && price) {
        localStorage.setItem(name, price);
        location.reload();
    }
    //clear
    nameField.value = '';
    priceField.value = '';
}

//set innerHtml from localStorage
for (let i = 0; i < localStorage.length; i++) {
    const name = localStorage.key(i);
    const price = localStorage.getItem(name);

    ul.innerHTML += `<li>${name} : ${price}</li><br>`;
}