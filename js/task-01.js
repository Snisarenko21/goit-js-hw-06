
const listEl = document.querySelectorAll('.item');

console.log(`Number of categories: ${listEl.length}`);

listEl.forEach(element => {

    const titleEl = element.firstElementChild;
    console.log('Category:', titleEl.textContent);
    
    const listChild = element.querySelectorAll('li');
    console.log('Elements:', listChild.length);
});