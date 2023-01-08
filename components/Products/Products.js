class Products {
    constructor(){
        this.classNameActive = 'products-item__btn-active';
        this.labelAdd = 'Добавить в корзину';
        this.labelIn = 'Товар в корзине';
    }
    handleSetLocationStorage(el, id) {
        const { pushProduct,products } = localStorageUtil.putProducts(id);
        if(pushProduct) {
            el.classList.add(this.classNameActive);
            el.innerHTML = this.labelIn;
        } else {
            el.classList.remove(this.classNameActive);
            el.innerHTML = this.labelAdd;
        }
        headerPage.render(products.length);
    }
    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        CATALOG.forEach(({id, name, img, price}) =>{
            let activeClass = '';
            let activeText = '';

            if(productsStore.indexOf(id) === -1){
                activeText = this.labelAdd
            } else {
                activeText = this.labelIn;
                activeClass = ' '+this.classNameActive;
            }
            htmlCatalog += `
            <li class="products-item">
            <span class="products-item__name">${name}</span>
            <img class="products-item__img" src="${img}" />
            <span class="products-item__price">${price.toLocaleString()} грн.</span>
            <button class="products-item__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button>
            </li>
            `
        });
        const html = `
        <ul class="products-container">
        ${htmlCatalog}
        </ul>
        `;
        ROOT_PRODUCTS.innerHTML = html;
    }
}
const productsPage = new Products();
