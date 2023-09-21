const list = document.querySelectorAll('.item');
function categoryItem(arr) {
    console.log("Number of categories:", list.length);
    arr.forEach(element => {
        const child = element.firstElementChild;
        const secondChild = element.lastElementChild.children;
        console.log("Category:", child.textContent);
        console.log("Elements", secondChild.length);
    })
}
categoryItem(list);