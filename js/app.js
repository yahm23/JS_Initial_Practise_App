document.addEventListener('DOMContentLoaded', () => {

  console.log('JS loaded');
  const form = document.querySelector('#new-form');
  form.addEventListener('submit', handleAlbumSubmit);

  const deleteAll = document.querySelector('#delete');
  deleteAll.addEventListener('click', handleAlbumDeletion);
});


const handleAlbumSubmit = function(evt) {

  event.preventDefault();
  console.log('printing event:', evt);

  const albumValue=evt.target.albumName.value;
  const artistValue=evt.target.artistName.value;
  const releaseValue=evt.target.release.value;

  const list = document.querySelector("#albums");
  const item = document.createElement("div");
  item.classList.add('card',)

  // const item = createNewElement('div1',list,'','card');

  // const item = document.createElement("div");
  // item.classList.add('card',)
  createNewElement('h1',item ,albumValue,'album-name');
  createNewElement('h2',item ,artistValue,'artist-name');
  createNewElement('p' ,item ,releaseValue,'release');

  list.appendChild(item);

  // event.target.reset();
}

const createNewElement = (tag, parent, content , classes ) => {
  const element = document.createElement(tag);
  element.textContent = content;
  element.classList = classes;
  parent.appendChild(element);
  return element;
}

const handleAlbumDeletion = function(evt) {
  console.log('deletion:', evt);
  const list = document.querySelector('#albums');
  // const list2 = document.querySelector('section');
  list.innerHTML = '';
  // list2.innerHTML = '';
}
