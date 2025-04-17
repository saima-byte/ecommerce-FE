// main.js

// Add to wishlist functionality
const wishlistButtons = document.querySelectorAll('.wishlist-btn');
wishlistButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        // Toggle the active state of the wishlist button
        button.classList.toggle('added');
        
        // You can add a visual cue, such as showing a message or changing the button color
        if (button.classList.contains('added')) {
            alert('Item added to wishlist');
        } else {
            alert('Item removed from wishlist');
        }
    });
});

// Add to cart functionality
const cartAddButtons = document.querySelectorAll('.cart-add-btn');
cartAddButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Show a success message when the item is added to the cart
        alert('Item added to cart');
    });
});

// Pagination functionality
const paginationButtons = document.querySelectorAll('.pagination-btn');
paginationButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove 'active' class from all buttons
        paginationButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add 'active' class to the clicked button
        button.classList.add('active');
        
        // Here, you can implement actual pagination logic like loading products for the corresponding page
        const pageNumber = button.textContent;
        console.log(`Loading page ${pageNumber}...`);
        
        // You can use this to load new products dynamically or use AJAX to fetch data
    });
});

// Scroll-to-top functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

// Show/Hide scroll-to-top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Responsive mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Dynamic product filtering (example for category filter)
const categoryLinks = document.querySelectorAll('.filter-category');
categoryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const category = e.target.dataset.category; // Assuming you have data-category attribute on your links
        
        // Apply filter logic, like hiding/showing products based on category
        console.log(`Filtering products by category: ${category}`);
        
        // You can also dynamically update the displayed products with AJAX
    });
});
