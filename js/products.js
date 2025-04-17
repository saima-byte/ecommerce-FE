// products.js

// Example data for products (this would usually come from a backend API)
const productsData = [
    {
        id: 1,
        name: 'Stylish Sunglasses',
        category: 'Accessories',
        price: 24.99,
        image: 'images/product1-1.jpg',
        description: 'Trendy sunglasses to elevate your style.',
    },
    {
        id: 2,
        name: 'Leather Jacket',
        category: 'Men',
        price: 99.99,
        image: 'images/product2-1.jpg',
        description: 'High-quality leather jacket for a bold look.',
    },
    {
        id: 3,
        name: 'Wool Scarf',
        category: 'Women',
        price: 19.99,
        image: 'images/product3-1.jpg',
        description: 'Cozy wool scarf to keep you warm in style.',
    },
    {
        id: 4,
        name: 'Sneakers',
        category: 'Men',
        price: 49.99,
        image: 'images/product4-1.jpg',
        description: 'Comfortable sneakers for everyday use.',
    },
    {
        id: 5,
        name: 'Sunglasses',
        category: 'Accessories',
        price: 24.99,
        image: 'images/product5-1.jpg',
        description: 'Stylish sunglasses for sunny days.',
    },
    {
        id: 6,
        name: 'T-shirt',
        category: 'Women',
        price: 14.99,
        image: 'images/product6-1.jpg',
        description: 'Casual t-shirt for everyday wear.',
    },
    {
        id: 7,
        name: 'Chinos',
        category: 'Men',
        price: 34.99,
        image: 'images/product7-1.jpg',
        description: 'Classic chinos for a refined look.',
    },
    {
        id: 8,
        name: 'Backpack',
        category: 'Accessories',
        price: 29.99,
        image: 'images/product8-1.jpg',
        description: 'Stylish backpack for your daily essentials.',
    },
];

// Select DOM elements
const productsContainer = document.querySelector('.products-container');
const paginationContainer = document.querySelector('.pagination');
const itemsPerPage = 4; // Number of products per page
let currentPage = 1;

// Function to display products based on the current page and filter
const displayProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const productsToShow = productsData.slice(startIndex, endIndex);

    // Clear previous product listings
    productsContainer.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <div class="product-image">
                <a href="product-details.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name"><a href="product-details.html?id=${product.id}">${product.name}</a></h3>
                <div class="product-price-cart">
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="cart-add-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `;

        productsContainer.appendChild(productCard);
    });

    // Handle pagination
    handlePagination();
};

// Function to handle pagination
const handlePagination = () => {
    const totalPages = Math.ceil(productsData.length / itemsPerPage);

    // Clear current pagination buttons
    paginationContainer.innerHTML = '';

    // Previous button
    const prevButton = document.createElement('button');
    prevButton.classList.add('pagination-btn', 'prev');
    prevButton.textContent = '<';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayProducts();
        }
    });
    paginationContainer.appendChild(prevButton);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.classList.add('pagination-btn');
        pageButton.textContent = i;
        if (i === currentPage) {
            pageButton.classList.add('active');
        }
        pageButton.addEventListener('click', () => {
            currentPage = i;
            displayProducts();
        });
        paginationContainer.appendChild(pageButton);
    }

    // Next button
    const nextButton = document.createElement('button');
    nextButton.classList.add('pagination-btn', 'next');
    nextButton.textContent = '>';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayProducts();
        }
    });
    paginationContainer.appendChild(nextButton);
};

// Initialize the product listing page
const init = () => {
    displayProducts();
};

// Run initialization
init();
