class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }
    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;
        CATALOG.forEach(({ id, name, img, price }) => {
            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                <tr class="shopping-item">
                <td class="shopping-item__name">${name}</td>
                <td class="shopping-item__price">${price.toLocaleString()} грн.</td>
                </tr>
                <div class="shopping-close" onclick="shoppingPage.handleClear()">
                <img src="https://img.icons8.com/ios/50/null/close-window--v1.png"/>
                </div>
                `;
                sumCatalog += price;
            }

        });
        const html = `
        <div class="shopping-container">
        <table>
        ${htmlCatalog}
        <tr class="shopping-item">
        <td class="shopping-item__name">Сумма:</td>
        <td class="shopping-item__price">${sumCatalog.toLocaleString()} грн.</td>
        </tr>
        </table>
        </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();