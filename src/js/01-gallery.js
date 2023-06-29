// Add imports above this line
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";
// Change code below this line

console.log(galleryItems);



const imgContainer = document.querySelector('.gallery')

const imgElement = galleryItems.reduce((acum, item) => {
    return (acum += `<div class="gallery__item"> <a class="gallery__link" href="${item.original}"><img class="gallery__image"
      src = "${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"/></a></div>`);
}, '');

imgContainer.insertAdjacentHTML('beforeend', imgElement);
var lightbox = new SimpleLightbox(".gallery a", {
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
 
});

//document.addEventListener('click', (element) => {

   // element.preventDefault();

   // if (element.target.nodeName !== "IMG") {
      //  return;
  //  }
   // const imgOriginal = element.target.getAttribute("data-source");
    //const instance = basicLightbox.create(`
    //<img src = "${imgOriginal}" width="800" height="600">`)

   // instance.show()

  //  document.addEventListener('keydown', (element) => {
   // if (element.code === "Escape") {
   //     instance.close(); 
   //     console.log('rrr');
   // }
//});

//});

//console.log(galleryItems);
//import * as basicLightbox from 'basiclightbox'


