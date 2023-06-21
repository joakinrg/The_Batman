const images = document.querySelectorAll('.wrapper img');

    images.forEach(img => {
      img.addEventListener('click', function() {
        const imageUrl = img.src;
        document.body.style.backgroundImage = `url(${imageUrl})`;
      });
    });