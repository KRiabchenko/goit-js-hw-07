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



function onImgClick(event) {
  event.preventDefault();

 if (event.target.nodeName !== "IMG") {
    return;
 }
  
  const imgLink = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${imgLink}">
  `,
    {
      onShow: () => { window.addEventListener('keydown', onEscape) },
      onClose: () => { window.removeEventListener('keydown', onEscape)},
  })
  function onEscape(evt) {
  const ECS_KEY_CODE = 'Escape';
  if (evt.code === ECS_KEY_CODE) {
    instance.close()
  }
}
  instance.show()

}

 




 


   

    
  
      

  