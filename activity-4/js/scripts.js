// welcome message
var user = 'Joseph';
var salutation = 'Hello, ';
var greeting = salutation + user 
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// product pricing
var price = 89.99,
    discount = .20,
    discountedPrice = price - (price * discount),
    priceEl = document.getElementById('price'),
    discountedPriceEl = document.getElementById('discounted-price');

    priceEl.textContent = price.toFixed(2)
    discountedPriceEl.textContent = discountedPrice.toFixed(2);
