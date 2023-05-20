import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')
const galleryListItems = [];

galleryItems.forEach(item => {
    galleryListItems.push(`<li><a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a></li>`);
});

gallery.insertAdjacentHTML("beforeend", galleryListItems.join(""))

