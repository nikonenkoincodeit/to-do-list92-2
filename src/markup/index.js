export function createMarkup(tasks = []) {
  return tasks
    .map(({ task, checked, id }) => {
      return `<li class='item ${checked ? "checked" : ""}' data-id="${id}">
  <p class="text">${task}</p>
  <button type="button" class="button">
    x
  </button>
</li>`;
    })
    .join("");
}
