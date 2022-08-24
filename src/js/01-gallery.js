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


galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    const isGalleryEl = evt.target.classList.contains('gallery__image');
    if (!isGalleryEl) {
        return;
    }
    const imgSource = evt.target.dataset.source;   
    const modal = basicLightbox.create(
    `<img width="1400" height="900" src="${imgSource}"> `
    ).show();  
    }