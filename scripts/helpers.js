const random = (max) => {
    return Math.floor(Math.random() * max);
}

// Check if the node occurs and if not, create one
const createNode = (nodeName, nodeType, content, parent) => {
    let node = document.querySelector(`#${nodeName}`);
    if (node === null) {
        node = document.createElement(nodeType);
        node.setAttribute('id', `#${nodeName}`);
        node.textContent = content;
        parent.appendChild(node);
    }
    return node;
}

// Remove all children of a node
const clearNode = (node) => {
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

export const Helpers = {
    random,
    createNode,
    clearNode
}
