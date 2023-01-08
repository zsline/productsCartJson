function render() {
    const productStore = localStorageUtil.getProducts();
    headerPage.render(productStore.length);
    productsPage.render();
}
let CATALOG = [];
fetch('https://gist.githubusercontent.com/zsline/88ea60c143155c52e07f8e564303d22a/raw/6cba0e20e0f8d2881f331d3f5c357f79fc138d87/catalog.json')
.then(res => res.json())
.then(body => {
    CATALOG = body;
    render();
})
.catch(error => {
    console.log(error);
});
