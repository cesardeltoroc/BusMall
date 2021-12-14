'use strict';

// Create an array for all the images to be put into a bug catalog.
const busCatalog = [];
console.log('hey sis');
// Create a counter
let ATTEMPTS = 25;
let clicks = 0;
//Window into section where images will be displayed.
let displayImages = document.getElementById('displayImages');

//Window DOM into html for image spots
let imageOne = document.getElementById('image-one');
let imageTwo = document.getElementById('image-two');
let imageThree = document.getElementById('image-three');

// Showing results.
let button = document.getElementById('results-button');


// Contrsuctor funciton for a new iteration of images for bus catalogs.

function BusCatalog(name, fileExtension) {
  this.name = name,
  this.src = `img/${name}.${fileExtension}`,
  this.views = 0,
  this.clicks = 0,
  busCatalog.push(this);
}



//executable code 
new BusCatalog('bag', 'jpg');
new BusCatalog('banana', 'jpg');
new BusCatalog('bathroom', 'jpg');
new BusCatalog('boots', 'jpg');
new BusCatalog('breakfast', 'jpg');
new BusCatalog('bubblegum', 'jpg');
new BusCatalog('chair', 'jpg');
new BusCatalog('cthulhu', 'jpg');
new BusCatalog('dog-duck', 'jpg');
new BusCatalog('dragon', 'jpg');
new BusCatalog('pen', 'jpg');
new BusCatalog('pet-sweep', 'jpg');
new BusCatalog('scissors', 'jpg');
new BusCatalog('shark', 'jpg');
new BusCatalog('sweep', 'png');
new BusCatalog('tauntaun', 'jpg');
new BusCatalog('unicorn', 'jpg');
new BusCatalog('water-can', 'jpg');
new BusCatalog('wine-glass', 'jpg');

//Function for random Index of images
function getRandomIndex() {
  return Math.floor(Math.random() * busCatalog.length);
}

// rendering images into html using DOM
function renderImg() {

  let RandomImgOne = getRandomIndex();
  let RandomImgTwo = getRandomIndex();
  let RandomImgThree = getRandomIndex();

  while (RandomImgOne === RandomImgTwo) {
    RandomImgOne = getRandomIndex();
  }
  while (RandomImgThree === RandomImgTwo) {
    RandomImgTwo = getRandomIndex();
  }

  imageOne.src = busCatalog[RandomImgOne].src;
  imageOne.alt = busCatalog[RandomImgOne].name;
  busCatalog[RandomImgOne].views++;

  imageTwo.src = busCatalog[RandomImgTwo].src;
  imageTwo.alt = busCatalog[RandomImgTwo].name;
  busCatalog[RandomImgTwo].views++;

  imageThree.src = busCatalog[RandomImgThree].src;
  imageThree.alt = busCatalog[RandomImgThree].name;
  busCatalog[RandomImgThree].views++;


}


//Ammount of times images were clickes and attempts run up at 25.
function handleImgClick(e) {
  clicks++;
  let imageClicked = e.target.alt;
  console.log(imageClicked);

  for (let i = 0; i < busCatalog.length; i++) {
    if (imageClicked === busCatalog[i].name) {
      busCatalog[i].clicks++;
    }
    renderImg();

    if (clicks === ATTEMPTS) {
      displayImages.removeEventListener('click', handleImgClick);
    }
  }
}

//Results.
function handleButtonClick() {
  let finalResults= document.getElementById('present-results');
  if (clicks === ATTEMPTS); {
    for (let i = 0; i < busCatalog.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${busCatalog[i].name} was viewed ${busCatalog[i].views} times and clicked ${busCatalog[i].clicks} times`;
      finalResults.appendChild(li);

    }
  }
}



// Add event listener for images clicked.

//Event 1
displayImages.addEventListener('click', handleImgClick);

//Event 2
button.addEventListener('click', handleButtonClick);


