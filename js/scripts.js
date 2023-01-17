window.onload = function(e) {
  document.querySelector('h1').remove();

  addElementToBody('h1', 'Webpage Recreation practice');
  addElementToBody('p', 'The HTML of this webpage was created with JavaScript.');
  let imgElement = addElementToBody('img');
  imgElement.src = 'https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900';
  imgElement.alt = 'This is an image of a Multicolored Tanager bird from birdsoftheworld.org';
  imgElement.style.width = '50%';
  addElementToBody('h1', 'Facts about the Multicolored Tanager');
  let factListElement = addElementToBody('ul');
  for (let i=0; i < 2; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = tanagerFacts[i];
    factListElement.append(listItem);
  }
  document.body.append(factListElement);
  addElementToBody('h2', 'Source');
  let wikiLinkElement = addElementToBody('a', 'Wikipedia');
  wikiLinkElement.href = 'https://en.wikipedia.org/wiki/Multicoloured_tanager';
  addElementToBody(wikiLinkElement);

}

function addElementToBody(tag, content) {
  let newElement = document.createElement(tag);
  if (content) {
    newElement.append(content);
  }  
  document.body.append(newElement);
  return newElement;
}

const tanagerFacts = [
  'It is endemic to the mountains of Colombia.',
  'It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.'
]
