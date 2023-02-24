import displayAdder from "display-adder-reese";
import major1 from "./img/major1.jpeg";
import major2 from "./img/major5.jpeg";
import major3 from "./img/major3.jpeg";
import major4 from "./img/major4.jpeg";

const makeFirstScreen = () => {
    const main = document.getElementById('main');
    const photoHolder = displayAdder.createDiv(main, '', 'photo-holder');
    photoHolder.dataset.iterationNum = 0;
    displayAdder.createImage(photoHolder, major1, '', 'major-picture,entering-photo');
    displayAdder.createImage(photoHolder, major2, '', 'major-picture');
    displayAdder.createImage(photoHolder, major3, '', 'major-picture,exiting-photo');
    displayAdder.createButton(photoHolder, rotatePhotos, 'Lets go', 'rotate-button');
}

function rotatePhotos() {
    var photoArray = [major1, major2, major3, major4];
    var onScreenPhotos = document.getElementsByClassName('major-picture');
    console.log(onScreenPhotos.length);
    for(let i = 0; i < onScreenPhotos.length; i++) {
        toggleClasses(onScreenPhotos[i]);
    }
    const iterationNum = parseInt(document.getElementById('photo-holder').dataset.iterationNum);
    var newPhotoNum = (iterationNum + 3) % photoArray.length;
    const photoHolder = document.getElementById('photo-holder');
    displayAdder.createImage(photoHolder, photoArray[newPhotoNum], '', 'major-picture,entering-photo');

    document.getElementById('photo-holder').dataset.iterationNum = iterationNum + 1;
}

function toggleClasses(photo) {
    if(photo.classList[1] == 'entering-photo') {
        photo.classList.remove('entering-photo');
    }
    else if(photo.classList[1] == 'exiting-photo') {
       photo.remove(); 
    }
    else {
        photo.classList.add('exiting-photo');
    }
}

makeFirstScreen();