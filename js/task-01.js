const namberCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${namberCategories.length}`);

namberCategories.forEach(function (item) {
    console.log(`Category:${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});