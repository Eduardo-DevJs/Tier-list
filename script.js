const item = document.querySelectorAll('.item');
const nivelArea = document.querySelectorAll('.nivel-area');

// EVENTOS
item.forEach((item) => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

nivelArea.forEach((area) => {
  area.addEventListener('dragover', dragOver);
  area.addEventListener('dragleave', dragLeave);
  area.addEventListener('drop', drop);
});

neutroArea.addEventListener("draover", dragOverNeutral)
neutroArea.addEventListener("dragleave", dragLeaveNeutral)
neutroArea.addEventListener("drop", dropNeutral)

// FUNCOES ITEM
function dragStart(e) {
  e.currentTarget.classList.add('dragging');
}

function dragEnd(e) {
  e.currentTarget.classList.remove('dragging');
}

// FUNCOES AREAS
function dragOver(e) {
  e.preventDefault();
  e.currentTarget.classList.add('hover');
}

function dragLeave(e) {
  e.currentTarget.classList.remove('hover');
}

function drop(e) {
  let dragItem = document.querySelector('.item.dragging');
  e.currentTarget.appendChild(dragItem);
}

