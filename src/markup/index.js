export function createMarkup(data = []) {
  return data
    .map(({ id, checked, value }) => {
      const classEl = checked ? 'checked' : '';
      return `<li class="item ${classEl}" data-id="${id}">
        <p class="text">${value}</p>
        <button type="button" class="button">x</button>
      </li>`;
    })
    .join('');
}

