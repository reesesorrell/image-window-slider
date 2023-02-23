import displayAdder from "display-adder-reese";
import major1 from "./img/major1.jpeg";
import major2 from "./img/major2.jpeg";
import major3 from "./img/major3.jpeg";
import major4 from "./img/major4.jpeg";
import major5 from "./img/major5.jpeg";

const main = document.getElementById('main');
const photoHolder = displayAdder.createDiv(main, '', 'photo-holder');
const picture = displayAdder.createImage(photoHolder, major1, 'major1', 'major-picture,entering-photo');
picture.onclick = rotateClass;

function rotateClass() {
    if(this.classList[1] == 'entering-photo') {
        this.classList.remove('entering-photo');
    }
    else if(this.classList[1] == 'exiting-photo') {
        
    }
    else {
        this.classList.add('exiting-photo');
    }
}