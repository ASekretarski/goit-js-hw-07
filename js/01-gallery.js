import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
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
});

gallery.insertAdjacentHTML("beforeend", galleryListItems.join(""))

const allGalleryItems = document.querySelectorAll('.gallery__item')

for (const item of allGalleryItems) {
    const itemLink = item.querySelector('.gallery__link')
    item.addEventListener("click", function () {
        basicLightbox.create(`
		<img width="1400" height="900" src="${itemLink.href}">
	`).show()
    })
}

