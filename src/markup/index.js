export function createMarkup(arrayData = []) {
    return arrayData.map(dataItem => {
       return `<li class="item ${dataItem.checked ? 'checked' : ''}"  data-id="${arrayData.id}">
        <p class="text">${dataItem.value}</p>
        <button type="button" class="button">x</button>
      </li>`
    }).join('')
}