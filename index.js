document.getElementById('form').addEventListener('submit', getInput);
renderList();

function renderList() {
  const countries = ['European Union', 'US', 'UK', 'China', 'Japan', 'India', 'Indonesia', 'Russian Federation'];

  countries.forEach(function(country) {
    let element = document.createElement('li');
    element.textContent = country;
    document.getElementById('list').appendChild(element);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';
    element.appendChild(deleteBtn);

    let editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    element.appendChild(editBtn);
  });
}

function getInput(event) {
  event.preventDefault();

  let element = document.createElement('li');
  element.textContent = document.getElementById('input').value;
  document.getElementById('list').appendChild(element);

  let button = document.createElement('button');
  button.textContent = 'delete';
  element.appendChild(button);

  let editBtn = document.createElement('button');
  editBtn.textContent = 'edit';
  element.appendChild(editBtn);
}

const list = document.querySelector('#list');
list.addEventListener('click', ({target}) => {
  if(target.textContent === 'edit')  {
  	target.closest('li').insertAdjacentHTML('afterend', '<div><input type="text" id="edit"></div>');
    target.closest('li').style.display = 'none';
    let editBtn = document.getElementById('edit');
    editBtn.insertAdjacentHTML('afterend', '<button id=save>SAVE</button>');
  } else if (target.textContent === 'delete') {
  	list.removeChild(target.closest('li'));
  } else if (target.textContent === 'SAVE') {

    let element = document.createElement('li');
    element.textContent = document.getElementById('edit').value;
    list.replaceChild(element, target.closest('div'));

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';
    element.appendChild(deleteBtn);

    let editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    element.appendChild(editBtn);
  } else {
  	return null;
  }
});
