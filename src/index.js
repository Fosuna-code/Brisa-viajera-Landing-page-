// Import CSS file
import './global.css';

// Import HTML file (webpack will process it through html-loader)
import html from './index.html';

// You can add JavaScript functionality here
console.log('Webpack + Tailwind CSS project loaded!');

// Example: Add click event to button
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    if (button) {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    }
});
