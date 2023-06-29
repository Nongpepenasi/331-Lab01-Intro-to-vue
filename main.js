const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Very good boots')
        const image = ref('./assets/images/socks_green.jpg')
        const camtWebsite = ref('https://www.camt.cmu.ac.th/')
        const inStock = ref(true)
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
            {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
        ])
        const sockSizes = ref([
            'S',
            'M',
            'L'
        ])
        const cart = ref(0)
        function addToCart() {
            cart.value += 1
        }
        function updateImage(variantImage){
            image.value = variantImage
        }
        function updateStock(){
            if (inStock.value){
                inStock.value = false;
            } else {
                inStock.value = true;
            }
        }
        return {
            product, 
            description, 
            image, 
            camtWebsite, 
            inStock, 
            inventory,
            onSale,
            details,
            variants,
            sockSizes,
            cart,
            addToCart,
            updateImage,
            updateStock
        }
    }
}).mount('#app')