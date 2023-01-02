import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      onclick="return false"
    />
  </a>
</div>`
    ).join('');
}
gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" "width="800" height="600"/>`, {
    onShow: () => {
      window.addEventListener('keydown', onEscKeyPress.bind(instance));
    },
      onClose: () => {
      window.removeEventListener('keydown', onEscKeyPress);
                 }
    },
  );
  instance.show();

 }
 function onEscKeyPress(event) {
    if (event.code === "Escape") {
      this.close();
    }
  }

// console.log(basicLightbox);
// console.log(galleryItems);
