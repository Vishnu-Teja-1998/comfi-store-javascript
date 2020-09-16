import {
    getStorageItem,
    setStorageItem
} from './utils.js';
let store = getStorageItem("store");
const setupStore = (products) => {
    store = products.map(product => {
        const {
            id,
            fields: {
                featured,
                price,
                company,
                colors,
                name,
                image: img
            }
        } = product;
        const image = img[0].thumbnails.large.url
        return {
            id,
            featured,
            price,
            company,
            colors,
            image,
            name
        }

    })
    setStorageItem("store", store)
};
const findProduct = () => {};
export {
    store,
    setupStore,
    findProduct
};