const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const listOfImagesRef = document.querySelector(".gallery");

// const makeListOfImages = (images) => {
//   return images.map(image => {
//     const addListItem = listOfImagesRef.insertAdjacentHTML('afterbegin', '<li><img></li>');
//     const imageListItem = document.querySelector('.gallery li img');
//     imageListItem.src = image.url;
//     imageListItem.alt = image.alt;

//     return addListItem;
//   });
// };

// makeListOfImages(images);

images.forEach(element => {
  listOfImagesRef.insertAdjacentHTML('afterbegin', '<li><img></li>');
  const imageListItem = document.querySelector('.gallery li img');
  imageListItem.src = element.url;
  imageListItem.alt = element.alt;
});