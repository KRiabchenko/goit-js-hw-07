import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createGalleryCards(galleryItems);
// const picturesLink = document.querySelector('.gallery__image');


galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);

galleryContainer.addEventListener('click', onContainerClick)

function createGalleryCards(pictures) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
<div class="gallery__item">
  <a class="gallery__link" href="#${original}">
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


function onContainerClick(e) {
    const isPictureGalleryEl = e.target.classList.contains('gallery__image');
    if (!isPictureGalleryEl) {
        return;
    }
    console.log(e.target.dataset.source);
}
