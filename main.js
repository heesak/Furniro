// Get the unordered list element
const linksList = document.querySelector('.links');

// Add event listeners for drag and drop
linksList.addEventListener('dragstart', dragStart);
linksList.addEventListener('dragover', dragOver);
linksList.addEventListener('drop', drop);

// Drag start event handler
function dragStart(e) {
  e.dataTransfer.setData('text/plain', null);
  e.currentTarget.classList.add('dragging');
}

// Drag over event handler
function dragOver(e) {
  e.preventDefault();
  const draggingElement = document.querySelector('.dragging');
  const currentElement = e.currentTarget;

  if (currentElement !== draggingElement) {
    const beforeElement =
      e.clientY - currentElement.getBoundingClientRect().top <
      currentElement.offsetHeight / 2
        ? currentElement
        : currentElement.nextElementSibling;
    linksList.insertBefore(draggingElement, beforeElement);
  }
}

// Drop event handler
function drop(e) {
  e.preventDefault();
  const draggingElement = document.querySelector('.dragging');
  draggingElement.classList.remove('dragging');
};


const searchToggleIcon = document.querySelector('.search-toggle-icon');
const searchInputContainer = document.querySelector('.search-input-container');
const searchInput = document.querySelector('.search-input');

searchToggleIcon.addEventListener('click', () => {
  searchInputContainer.style.display = searchInputContainer.style.display === 'none' ? 'flex' : 'none';
  searchInput.focus();
});

