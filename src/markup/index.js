export function createLi({ value, checked, id } = {}) {
  return `<li class="item ${checked ? "checked" : ""}" data-id="${id}">
        <p class="text">${value}</p>
        <button type="button" class="button">x</button>
      </li>`;
}

export function addNewLi(element, markup) {
  element.insertAdjacentHTML("beforeend", markup);
}
