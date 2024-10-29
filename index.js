// Object
// For each
function searchGiphy() {
  const apiKey = 'ICkXapc1xcA0ZEAUGVQdQUoDPlvItBdJ';
  const input = document.getElementById('searchInput').value;
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(input)}&api_key=${apiKey}&limit=20`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          const imageGrid = document.getElementById('imageGrid');
          imageGrid.innerHTML = ''; // Clear existing images

          // Show header and update with search term
          const header = document.getElementById('searchHeader');
          const termDisplay = document.getElementById('searchTermDisplay');
          termDisplay.textContent = input;
          header.style.display = 'block'; // Show the header

          data.data.forEach(gif => {
              const img = document.createElement('img');
              img.src = gif.images.fixed_width.url;
              img.alt = gif.title;
              imageGrid.appendChild(img);
          });

          // If no results or data is empty, hide the header
          if (data.data.length === 0) {
              header.style.display = 'none';
          }
      })
      .catch(error => {
          console.error('Error:', error);
          document.getElementById('searchHeader').style.display = 'none'; // Ensure header is hidden on error
          // Optionally, display an error message to the user
      });
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
      if (!event.target.closest('.navbar')) {
          navMenu.classList.remove('active');
          hamburger.classList.remove('active');
      }
  });
});