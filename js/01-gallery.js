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

const galleryLink = document.querySelector('.gallery__link');

galleryLink.addEventListener('click', onClickShowModal);

function onClickShowModal(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
      const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}" />`);

    instance.show()
}




// console.log(basicLightbox);
// console.log(galleryItems);
