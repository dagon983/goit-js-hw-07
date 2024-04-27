const listCategories = document.querySelectorAll(".item > h2");
console.log(`Number of categories: ${listCategories.length}`);
const listItem = document.querySelectorAll(".item");
listItem.forEach((item) =>{
    const elements = item.querySelectorAll(".item > ul > li");
    const categories = item.querySelectorAll(".item > h2");
    categories.forEach(element => console.log(`Category: ${element.textContent}`))
    console.log(`Elements: ${elements.length}`)
});
