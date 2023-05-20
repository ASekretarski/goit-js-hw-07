import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery')
const galleryListItems = [];

galleryItems.forEach(item => {

    galleryListItems.push(`<li><div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="Image description"
    />
  </a>
</div></li>`);
});

gallery.insertAdjacentHTML("beforeend", galleryListItems.join(""))

const allGalleryLinks = document.querySelectorAll('.gallery__link')

for (const link of allGalleryLinks) {
    link.addEventListener("click", function (event) {
        event.preventDefault()
        const imageLink = `<img width="1400" height="900" src="${link.href}">`
        basicLightbox.create(imageLink).show()  
    }) 
}

