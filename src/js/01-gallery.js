// Add imports above this line

// Описан в документации

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

const ulEl = document.querySelector('.gallery');
  function createListGalleryItems(items) {
    return items.map(({ preview, original, description }) => `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join('');
}
   const listGallaryItems = createListGalleryItems(galleryItems);
   ulEl.insertAdjacentHTML("beforeend", listGallaryItems);


    let galleryEl = new SimpleLightbox('.gallery a',{
    
    captionPosition: `bottom`,
    captionsData: "alt",
    captionDelay: 250,
});


console.log(galleryItems);
