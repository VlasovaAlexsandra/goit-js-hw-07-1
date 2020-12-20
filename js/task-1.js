const items = [...document.querySelectorAll('li.item')];
// console.log(items);
console.log(`В списке ${items.length} категории.`);

items
  .map(item => {
    const title = item.querySelector('h2');
    const list = item.querySelectorAll('ul li');
    return {
      title: title.textContent,
      count: list.length,
    };
  })
  .forEach(entry => {
    console.log(
      'Категория: ',
      entry.title,
      '\r\nКоличество элементов: ',
      entry.count,
    );
  });
