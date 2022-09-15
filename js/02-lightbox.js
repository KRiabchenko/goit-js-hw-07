import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const picturesMarkup = createGalleryCards(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', picturesMarkup);
galleryContainer.addEventListener('click', onImgClick);

function createGalleryCards() {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" "/>
    </a>
    `;
    }).join('');
}

const galleryImage = document.querySelectorAll('.gallery__image');

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  } 
}

const lightbox = new SimpleLightbox('.gallery a',
  { captionDelay: 250, captionsData: "alt" });


// galleryImage.forEach((evt) => {
//   evt.title = evt.alt;
//   evt.loading = "lazy";
// });
    

    







