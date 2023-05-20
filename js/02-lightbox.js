import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')
const galleryListItems = [];

galleryItems.forEach(item => {
    galleryListItems.push(`<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`);
});

gallery.insertAdjacentHTML("beforeend", galleryListItems.join(""))



const allGalleryLinks = document.querySelectorAll('.gallery__item')

for (const link of allGalleryLinks) {
    link.addEventListener("click", function (event) {
        event.preventDefault()
        console.log("Hello world") 
    }) 
}

var lightbox = new SimpleLightbox('.gallery a', { captions:true, captionsData:'alt', captionDelay:250,  });