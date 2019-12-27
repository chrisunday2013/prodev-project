// function myFunction() {
//   // Declare variables
//   var input, filter, ul, li, a, i;
//   input = document.getElementById("mySearch");
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myMenu");
//   li = ul.getElementsByTagName("li");

//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }

const jobs = [
 {name: 'angular.js developer'},
 {name: 'react.js developer'},
 {name: 'vue.js developer'},
 {name: 'front-end developer'},
 {name: 'back-end developer'},
 {name: 'full-stack developer'},
 {name: 'games developer'},
 {name: 'software Engineer'}

];

const list = document.getElementById('list');

function setList(group) {
  clearList();
  for (const person of group) {
    const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode(person.name);
    item.appendChild(text);
    list.appendChild(item);
  }
  if (group.length === 0) {
    setNoResults();
  }
}

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

}

function setNoResults() {
  const item = document.createElement('li');
    item.classList.add('list-group-item');
    const text = document.createTextNode('No results found');
    item.appendChild(text);
    list.appendChild(item);

}

function getRelevancy(value, searchTerm) {
  if (value === searchTerm) {
    return 2;

  } else if (value.startsWith(searchTerm)) {
    return 1;
  }else if (value.includes(searchTerm)) {
    return 0;
  }else {
    return -1;
  }
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
  let value = event.target.value;
  if (value && value.trim().length > 0) {
  value = value.trim().toLowerCase();
  setList(jobs.filter(person => {
    return person.name.includes(value);
  }).sort((personA, personB) => {
    return getRelevancy(personB.name, value) - getRelevancy(personA, value);

  }));
} else {
  clearList()
}
});












