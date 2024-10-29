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

          data.data.forEach(gif => {
              const img = document.createElement('img');
              img.src = gif.images.fixed_width.url;
              img.alt = gif.title;
              imageGrid.appendChild(img);
          });
      })
      .catch(error => console.error('Error:', error));
}

