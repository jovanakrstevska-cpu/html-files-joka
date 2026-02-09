const loadDogsBtn = document.getElementById('loadDogs');
const dogContainer = document.getElementById('dogContainer');

loadDogsBtn.addEventListener('click', function() {

    // Clear previous images
    dogContainer.innerHTML = '';

    // Fetch data from Dog API
    fetch('https://dog.ceo/api/breed/hound/images')
        .then(response => response.json()) // Convert response to JSON
        .then(data => {

            // data.message contains an array of image URLs
            const images = data.message;

            // Loop through each image URL
            images.forEach(url => {

                // Create an img element
                const img = document.createElement('img');
                img.src = url;
                img.alt = 'Hound Dog';
                img.style.width = '150px';
                img.style.height = '150px';
                img.style.objectFit = 'cover';
                img.style.borderRadius = '10px';

                // Add the image to the container
                dogContainer.appendChild(img);
            });

        })
        .catch(error => {
            console.log('Error fetching dogs:', error);
        });
});