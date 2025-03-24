class Product {
    constructor(code, name, quantity) {
        this.code = code;
        this.name = name;
        this.quantity = quantity;
    }
}

class ProductManager {
    constructor() {
        this.productCodeInput = document.getElementById('productCode');
        this.productNameInput = document.getElementById('productName');
        this.productQuantityInput = document.getElementById('productQuantity');
        this.addProductBtn = document.getElementById('addProductBtn');
        this.deleteProductBtn = document.getElementById('deleteProductBtn');
        this.searchCodeInput = document.getElementById('searchCode');
        this.productTableBody = document.getElementById('productTableBody');
        this.products = [];

        this.addProductBtn.addEventListener('click', this.addProduct.bind(this));
        this.deleteProductBtn.addEventListener('click', this.deleteProduct.bind(this));
    }

    addProduct() {
        const code = this.productCodeInput.value;
        const name = this.productNameInput.value;
        const quantity = parseInt(this.productQuantityInput.value);

        if (code && name && !isNaN(quantity)) {
            const newProduct = new Product(code, name, quantity);
            this.products.push(newProduct);
            this.renderProducts();
            this.clearInputFields();
        } else {
            alert('Prašome įvesti teisingus duomenis.');
        }
    }

    deleteProduct() {
        alert('Ištrinti produktą funkcionalumas bus įgyvendintas vėliau.');
    }

    searchProduct() {
        alert('Ieškoti produkto funkcionalumas bus įgyvendintas vėliau.');
    }

    renderProducts() {
        this.productTableBody.innerHTML = '';
        this.products.forEach(product => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.code}</td>
                <td>${product.name}</td>
                <td>${product.quantity}</td>
            `;
            this.productTableBody.appendChild(row);
        });
    }

    clearInputFields() {
        this.productCodeInput.value = '';
        this.productNameInput.value = '';
        this.productQuantityInput.value = '';
    }
}