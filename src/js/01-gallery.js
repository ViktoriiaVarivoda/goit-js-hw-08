// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createColorCardsGallery(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createColorCardsGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
            alt="${description}"
            />
            </a>
            </div>`;
        })
        .join('');
}

new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionsDelay: 250,
    });

