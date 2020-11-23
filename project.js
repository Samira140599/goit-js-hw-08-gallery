'use strict'

import arrImgs from './gallery-items.js';

const createItemGallery = arrImg => { 
    const itemLiRef = document.createElement('li')
    itemLiRef.classList.add('gallery__item')
    const linkBigimgRef = document.createElement('a')
    linkBigimgRef.classList.add('gallery__link')
    linkBigimgRef.setAttribute('href', arrImg.original)
    const smallImgRef = document.createElement('img')
    smallImgRef.classList.add('gallery__image')
    smallImgRef.setAttribute('src', arrImg.preview)
    smallImgRef.setAttribute('data-source', arrImg.original)
    smallImgRef.setAttribute('alt', arrImg.description)
    itemLiRef.appendChild(linkBigimgRef)
    linkBigimgRef.appendChild(smallImgRef)
    return itemLiRef
}
const ulGalleryRef=document.querySelector('.js-gallery')
ulGalleryRef.append(...arrImgs.map(arrImg => createItemGallery(arrImg)))

const modalWindRef = document.querySelector('.js-lightbox') 
const modalImgdRef = document.querySelector('.lightbox__image')
function ulClickTarget (event) { 
  event.preventDefault()
  if (event.target.nodeName !== 'IMG') { 
    return
}
  setlargeImgURL(event.target.dataset.source, event.target.getAttribute('alt'))
  modalWindRef.classList.add('is-open')
}
function setlargeImgURL(url,alt) {
  modalImgdRef.setAttribute('src', url)
  modalImgdRef.setAttribute('alt', alt)
}
ulGalleryRef.addEventListener('click', ulClickTarget)

const modalBtnRef = document.querySelector('.lightbox__button') 
function btnClickTarget() {
  modalWindRef.classList.remove('is-open')
  modalImgdRef.setAttribute('src', '')
  modalImgdRef.setAttribute('alt', '')
}
modalBtnRef.addEventListener('click', btnClickTarget)