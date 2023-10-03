function updateInnerHTML(selector, string) {
    document.querySelector(selector).innerHTML = string;
}

updateInnerHTML('h1', "New Topic");

function strong(string) {
    return `<strong>${string}</strong>`;
}

const template = strong('making things useful');
console.log(template);

const updateInnerHTMLWithAdjacent = function(selector, htmlString) {
    document.querySelector(selector).insertAdjacentHTML('beforeend', htmlString);
}

updateInnerHTMLWithAdjacent('section', template);