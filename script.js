let areas = {
    a: null,
    b: null,
    c: null
}
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
        updateAreas();
    };
};
function dropNeutral(e) {
    e.currentTarget.classList.remove('hover');
    const dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    updateAreas();
};

// função lógica
function updateAreas() {
    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name');
        const verificacao = area.querySelector('.item') !== null;
        if (verificacao) {
            areas[name] = area.querySelector('.item').innerHTML;
        } else {
            areas[name] = null;
        }
    });

    const posicaoErrada = areas.a !== null && areas.b !== null && areas.c !== null;
    if (posicaoErrada) {
        document.querySelector('.areas').classList.add('incorrect');
    } else {
        document.querySelector('.areas').classList.remove('incorrect');
    }

    const verificacao = areas.a === '1' && areas.b === '2' && areas.c === '3';
    if (verificacao) {
        document.querySelector('.areas').classList.remove('incorrect');
        document.querySelector('.areas').classList.add('correct');
    } else {
        document.querySelector('.areas').classList.remove('correct');
    }

}




