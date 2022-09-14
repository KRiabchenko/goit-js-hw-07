import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createGalleryCards(galleryItems);



galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

galleryContainer.addEventListener('click', onContainerClick);
galleryContainer.addEventListener('click', onImgClick);

galleryContainer.addEventListener('click', createBasicLightbox);

function createGalleryCards() {
    return galleryItems.map(({ preview, original, description }) => {
        return `
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    }).join('');
}

const galleryImages = document.querySelectorAll('.gallery__image');


function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}

function onContainerClick(e) {
  const isPictureGalleryEl = e.target.classList.contains('.gallery__image');
  
    if (!isPictureGalleryEl) {
      return;
    }
  

  
};

function createBasicLightbox(e) {
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}">
`)
  console.log(e.target.dataset.source);
  instance.show()
  
  // window.addEventListener('keydown', onEscape);
}



// function closeBasicLightbox(e) {
// const instanceEl = !basicLightbox.visible;
//   console.log(instanceEl); 
  
//   if (instanceEl === true) {
//        window.removeEventListener('keydown', onEscape); 
//   }
// }

// function onEscape(event) {
  
//   if (event.code === 'Escape') {
//     console.log(event.code);
//   }
// }


