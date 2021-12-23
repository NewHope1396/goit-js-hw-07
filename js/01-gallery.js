import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerRef = document.querySelector('.gallery');

const imagesHtml = createImagesHtml(galleryItems);

containerRef.insertAdjacentHTML('beforeend' ,imagesHtml);


function createImagesHtml(images) {
    return galleryItems.map((img) => {
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${img.original}">
                        <img
                            class="gallery__image"
                            src="${img.preview}"
                            data-source="${img.original}"
                            alt="${img.description}"
                         />
                    </a>
                </div>`
    }).join('')
}

containerRef.addEventListener('click', onImageClick);

function onImageClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `)

    instance.show()

    window.addEventListener('keydown', onEscPress)

    function onEscPress(evt) {
        if (evt.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', onEscPress)
        }
    }
}
