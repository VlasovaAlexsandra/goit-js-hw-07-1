import images from './images.js';

// console.log(images);

const createGalleryItem = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" width = 200 height = 150></li>`;
const galleryMarkup = images.reduce(
  (acc, item) => acc + createGalleryItem(item),
  '',
);

const galleryList = document.querySelector('#gallery');
galleryList.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryList.setAttribute('style', 'list-style-type:none; display: flex;');
