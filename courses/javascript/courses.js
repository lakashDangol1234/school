// Grabing all gallery item for opening modal when clicked
let galleryItemCollection = document.getElementsByClassName('gallery_item');

// For toggling Gallery Modal when clicked on gallery item from JavaScript
const galleryModal = new bootstrap.Modal('#galleryModal');

// Image to be populated on the modal when triggered
let modalBodyImg = document.getElementById('modal-body-img');

// Image info in the modal . Like : image 1 of 6 
let imageInfo = document.getElementById('image_info');

// For changing Image on Modal when clicked on left arrow or right arrow on Bottom . Grabing those buttons
let galleryImageLeft = document.getElementById('gallery_image_left');
let galleryImageRight = document.getElementById('gallery_image_right');



// Adding event listener for each gallery item 
Array.from(galleryItemCollection).forEach((galleryItem, index) => {
    galleryItem.addEventListener('click', e => {
        galleryModal.toggle();

        // Image to be populated on the modal i.e the galleryItem's image which is clicked . Grabing image
        let galleryImage = galleryItem.lastElementChild.firstElementChild;

        // Image on Modal Body
        modalBodyImg.src = galleryImage.src;
        modalBodyImg.alt = `Gallery Image ${index + 1}`;

        // Image info . Putting index + 1 . Starting from 1 to galleryItemCollection.length
        imageInfo.innerText = `Image ${index + 1} of ${galleryItemCollection.length}`;

        // Putting image Number in the image's data attribute so that we can use left/right arrow button on the modal body
        // Putting index number of galleryItemCollection .  Starting from 0 to (galleryItemCollection.length - 1)
        modalBodyImg.dataset.imageNo = index;

    })
})


// Adding event listener for the right / left button on modal for changing next/previous Image 

// For right image 
galleryImageRight.addEventListener('click', (e) => {
    // Selecting Modal Body
    let modalBody = e.target.parentElement.parentElement.previousElementSibling;

    // Selcting Image of Modal Body
    let modalBodyImg = modalBody.firstElementChild;

    // Getting Index of the image in Modal Body 
    let index = parseInt(modalBodyImg.dataset.imageNo);

    // Index is the number from 0 to (galleryItemCollection.length - 1)
    if ((index + 1) < galleryItemCollection.length) {
        // Grabbing next Gallery Item
        let nextGalleryItem = galleryItemCollection[index + 1];

        // Grabbing Image of next Gallery Item
        let nextGalleryImage = nextGalleryItem.lastElementChild.firstElementChild;

        // Changing src to the next image of the modal body 
        modalBodyImg.src = nextGalleryImage.src;
        modalBodyImg.alt = `Gallery Image ${index + 2}`;


        // Putting imageNo to the next Number 
        modalBodyImg.dataset.imageNo = index + 1;

        // Image info
        imageInfo.innerText = `Image ${index + 2} of ${galleryItemCollection.length}`;
    }


    // If the index number is equal to (galleryItemCollection.length - 1), then show the starting image again
    else if ((index + 1) === galleryItemCollection.length) {
        // Grabbing first Gallery Item
        let nextGalleryItem = galleryItemCollection[0];

        // Grabbing Image of first Gallery Item
        let nextGalleryImage = nextGalleryItem.lastElementChild.firstElementChild;

        // Changing src to the first image of the modal body 
        modalBodyImg.src = nextGalleryImage.src;
        modalBodyImg.alt = `Gallery Image 1`;

        // Putting imageNo to the 0 Number 
        modalBodyImg.dataset.imageNo = 0;

        // Image info
        imageInfo.innerText = `Image 1 of ${galleryItemCollection.length}`;
    }
})

// For left image 
galleryImageLeft.addEventListener('click', (e) => {
    // Selecting Modal Body
    let modalBody = e.target.parentElement.parentElement.previousElementSibling;

    // Selcting Image of Modal Body
    let modalBodyImg = modalBody.firstElementChild;

    // Getting Index of the image in Modal Body 
    let index = parseInt(modalBodyImg.dataset.imageNo);

    // Index is the number from 0 to (galleryItemCollection.length - 1)
    if ((index - 1) >= 0) {
        // Grabbing previous Gallery Item
        let previousGalleryItem = galleryItemCollection[index - 1];

        // Grabbing Image of previous Gallery Item
        let previousGalleryImage = previousGalleryItem.lastElementChild.firstElementChild;

        // Changing src to the previous image of the modal body 
        modalBodyImg.src = previousGalleryImage.src;
        modalBodyImg.alt = `Gallery Image ${index}`;

        // Putting imageNo to the next Number 
        modalBodyImg.dataset.imageNo = index - 1;

        // Image info
        imageInfo.innerText = `Image ${index} of ${galleryItemCollection.length}`;
    }


    // If the current image index is 0 and (index-1) becomes -1 then we have to show the last image on the galleryItemCollection i.e (galleryItemCollection.length - 1)
    else if ((index - 1) == -1) {
        let lastGalleryItem_indexNumber = galleryItemCollection.length - 1;
        // Grabbing last Gallery itme Gallery Item
        let lastGalleryItem = galleryItemCollection[lastGalleryItem_indexNumber];

        // Grabbing Image of last Gallery Item
        let lastGalleryImage = lastGalleryItem.lastElementChild.firstElementChild;

        // Changing src to the last image of the modal body 
        modalBodyImg.src = lastGalleryImage.src;
        modalBodyImg.alt = `Gallery Image ${lastGalleryItem_indexNumber}`;

        // Putting imageNo to the last Number 
        modalBodyImg.dataset.imageNo = lastGalleryItem_indexNumber;

        // Image info
        imageInfo.innerText = `Image ${lastGalleryItem_indexNumber + 1} of ${galleryItemCollection.length}`;
    }
})
