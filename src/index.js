import displayAdder from "display-adder-reese";
import major2 from "./img/major1.jpeg";
import major3 from "./img/major5.jpeg";
import major1 from "./img/major3.jpeg";
import major4 from "./img/major4.jpeg";

const makeFirstScreen = () => {
    const main = document.getElementById('main');
    displayAdder.createDiv(main, 'Hey Major', 'header-text');
    const photoHolder = displayAdder.createDiv(main, '', 'photo-holder');
    photoHolder.dataset.iterationNum = 0;
    //displayAdder.createButton(photoHolder, rotatePhotos, 'Lets go', 'rotate-button');
    displayAdder.createImage(photoHolder, major1, '', 'major-picture,entering-photo');
    displayAdder.createImage(photoHolder, major2, '', 'major-picture,main-picture');
    displayAdder.createImage(photoHolder, major3, '', 'major-picture,exiting-photo');
}

function rotatePhotos() {
    var photoArray = [major1, major2, major3, major4];
    const onScreenPhotos = document.getElementsByClassName('major-picture');
    var leavingPhoto;
    for(let i = 0; i < 3; i++) {
        var potentialLeavingPhoto = toggleClasses(onScreenPhotos[i]);
        if(potentialLeavingPhoto) {
            leavingPhoto = potentialLeavingPhoto;
        }
    }
    leavingPhoto.classList.remove('exiting-photo');
    leavingPhoto.classList.add('entering-photo');
    setTimeout(() => {
    leavingPhoto.remove();
    const iterationNum = parseInt(document.getElementById('photo-holder').dataset.iterationNum);
    var newPhotoNum = (iterationNum + 3) % photoArray.length;
    const photoHolder = document.getElementById('photo-holder');
    displayAdder.createImage(photoHolder, photoArray[newPhotoNum], '', 'major-picture,entering-photo');
    document.getElementById('photo-holder').dataset.iterationNum = iterationNum + 1;}, 200)
}

function toggleClasses(photo) {
    if(photo.classList[1] == 'entering-photo') {
        photo.classList.remove('entering-photo');
        photo.classList.add('main-picture')
    }
    else if(photo.classList[1] == 'exiting-photo') {
       return photo;
    }
    else {
        photo.classList.add('exiting-photo');
        photo.classList.remove('main-picture');
    }
}

makeFirstScreen();

setInterval(() => {rotatePhotos()}, 3000);