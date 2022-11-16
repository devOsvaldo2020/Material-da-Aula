
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
});

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeave);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);

document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragOver);
    area.addEventListener('dragleave', dragLeave);
    area.addEventListener('drop', drop);
});

// =========   funcoes ==========

function dragStart(e_add) {
    e_add.currentTarget.classList.add('dragging');
};
function dragEnd(e_remove) {
    e_remove.currentTarget.classList.remove('dragging')
};
function dragLeave(e) {
    e.currentTarget.classList.remove('hover');
};
function dragOver(e) {
    const verificacao = e.currentTarget.querySelector('.item') === null;
    if (verificacao) {
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    };
};
function dragOverNeutral(e) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
};
function drop(e) {
    e.currentTarget.classList.remove('hover');
    const verificacao = e.currentTarget.querySelector('.item') === null;
    if (verificacao) {
        let dragItem = document.querySelector('.item.dragging');
        e.currentTarget.appendChild(dragItem);
    };
};
function dropNeutral(e) {
    e.currentTarget.classList.remove('hover');
    const dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
};




