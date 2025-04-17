// product-details.js

// Assuming the product data comes from a backend API or is embedded in the page
const productId = new URLSearchParams(window.location.search).get('id');
const productTitle = document.querySelector('.product-title');
const productDescription = document.querySelector('.product-description');
const productPrice = document.querySelector('.product-price');
const productImagesContainer = document.querySelector('.product-images');
const productSizeSelector = document.querySelector('.product-size');
const productColorSelector = document.querySelector('.product-color');
const addToCartButton = document.querySelector('.add-to-cart-btn');

// Example function to fetch product data from a backend API or static data
const fetchProductDetails = async () => {
    // For demonstration, using static data. Replace with an API call if needed.
    const productData = {
        id: productId,
        title: 'Stylish Sunglasses',
        description: 'Trendy sunglasses to elevate your style. Perfect for sunny days.',
        price: '$24.99',
        sizes: ['S', 'M', 'L'],
        colors: ['Black', 'Brown', 'Blue'],
        images: [
            'images/product1-1.jpg',
            'images/product1-2.jpg',
            'images/product1-3.jpg',
        ]
    };

    // Set product details in the DOM
    productTitle.textContent = productData.title;
    productDescription.textContent = productData.description;
    productPrice.textContent = productData.price;

    // Populate size options
    productData.sizes.forEach(size => {
        const sizeOption = document.createElement('option');
        sizeOption.value = size;
        sizeOption.textContent = size;
        productSizeSelector.appendChild(sizeOption);
    });

    // Populate color options
    productData.colors.forEach(color => {
        const colorOption = document.createElement('option');
        colorOption.value = color;
        colorOption.textContent = color;
        productColorSelector.appendChild(colorOption);
    });

    // Display product images
    productData.images.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = productData.title;
        img.classList.add('product-image');
        productImagesContainer.appendChild(img);

        // Optional: Add image zoom or preview functionality
        img.addEventListener('mouseover', () => {
            img.classList.add('zoomed');
        });
        img.addEventListener('mouseout', () => {
            img.classList.remove('zoomed');
        });
    });
};

// Function to handle adding product to the cart
const addToCart = () => {
    const selectedSize = productSizeSelector.value;
    const selectedColor = productColorSelector.value;

    // Validate size and color selection
    if (!selectedSize || !selectedColor) {
        alert('Please select both size and color!');
        return;
    }

    // Create cart item object (this could be stored in localStorage or sent to the backend)
    const cartItem = {
        id: productId,
        title: productTitle.textContent,
        price: productPrice.textContent,
        size: selectedSize,
        color: selectedColor,
        quantity: 1,
    };

    // Add item to cart (localStorage or cart array for now)
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show a success message
    alert('Product added to cart');
};

// Initialize product details page
const init = () => {
    // Fetch and display product details
    fetchProductDetails();

    // Add event listener for add to cart button
    addToCartButton.addEventListener('click', addToCart);
};

// Run the initialization
init();
