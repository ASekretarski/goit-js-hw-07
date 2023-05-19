import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
console.log(galleryItems);
console.log("__________________________")
const galleryListItems = [];

galleryItems.forEach(item => {

    galleryListItems.push(`<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="Image description"
    />
  </a>
</div>`);
    console.log(item.description)
    console.log(item.preview)
    console.log(item.original)
    console.log("__________________________")
});

console.log(galleryListItems.join(""))

gallery.insertAdjacentHTML("beforeend", galleryListItems.join(""))

