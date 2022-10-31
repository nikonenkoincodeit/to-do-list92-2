export function createLi(input) {
  return `<li class="item " data-id="1667218254464">
        <p class="text">${input}</p>
        <button type="button" class="button">x</button>
      </li>`;
}

export function addNewLi(element, markup) {
  element.insertAdjacentHTML("beforeend", markup);
}
