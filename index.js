function render() {
    const productStore = localStorageUtil.getProducts();
    headerPage.render(productStore.length);
    productsPage.render();
}
let CATALOG = [];
fetch('https://raw.githubusercontent.com/zsline/productsCartJson/master/server/catalog.json')
.then(res => res.json())
.then(body => {
    CATALOG = body;
    render();
})
.catch(error => {
    console.log(error);
});
