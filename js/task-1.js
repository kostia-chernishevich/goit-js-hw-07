const searchItem = document.querySelectorAll('li.item');
console.log('Number of categories:', searchItem.length);
searchItem.forEach(searchItem => {
    const title = searchItem.querySelector('h2').textContent;
    const itemContent = searchItem.querySelectorAll('ul li');
    console.log('Category:', title);
    console.log('Elements:', itemContent.length);
});

