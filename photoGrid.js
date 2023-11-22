document.addEventListener('DOMContentLoaded', function () {
    // Replace this array with the URLs of your photos
    const photoUrls = [
        'images/MTC1.jpeg',
        'images/MTC2.jpg',
        'images/MTC3.jpeg',
        'images/MTC4.jpeg',
        'images/howdy1.jpeg',
        'images/howdy2.jpeg',
        'images/howdy3.jpg',
        'images/howdy4.jpeg',
        'images/alive1.jpg',
        'images/alive2.jpg',
        'images/alive3.jpg',
        'images/down1.jpeg',
        'images/down2.jpeg',
        'images/down3.jpeg',
        'images/down4.jpg',
        'images/out1.jpeg',
        'images/out2.jpeg',
        'images/out3.jpg',
        'images/cuss1.jpg',
        'images/cuss2.jpg',
        'images/cuss3.jpg',
        'images/cuss4.jpg',
        'images/monos1.jpg',
        'images/monos2.jpeg',
        'images/monos3.jpg',
        'images/monos4.jpg',
        'images/Monito1.jpeg',
        'images/monito2.jpeg',
        'images/monito3.jpeg',
        'images/monito4.jpg',
        'images/next1.jpeg',
        'images/next2.jpeg',
        'images/next3.jpeg',
        'images/next4.jpg',
        'images/next5.jpg',
        'images/next6.jpeg',
        'images/bobo1.jpeg',
        'images/bobo2.jpeg',
        'images/bobo3.jpeg',
        'images/bobo4.jpeg',
        'images/bobo5.jpg',
        'images/bobo6.jpg',


        // Add more photo URLs as needed
    ];

    const photoGrid = document.getElementById('photoGrid');

    photoUrls.forEach(url => {
        const photoItem = document.createElement('div');
        photoItem.classList.add('photo-item');

        const img = document.createElement('img');
        img.src = url;
        img.alt = url;

        // Open modal on image click
        img.addEventListener('click', function () {
            openModal(url);
        });
        
        photoItem.appendChild(img);
        photoGrid.appendChild(photoItem);
    });
});
// Open modal function
function openModal(url) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImage.src = url;
}

// Close modal function
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
            