const { createApp, ref, computed } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        const description = ref('Very good boots')
        // const image = ref('./assets/images/socks_green.jpg')
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        const camtWebsite = ref('https://www.camt.cmu.ac.th/')
        // const inStock = ref(true)
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })

        const inventory = ref(100)

        const onSale = ref(true)

        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])

        const variants = ref([
            {id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
            {id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
        ])

        const selectedVariant = ref(0)

        const sockSizes = ref([
            'S',
            'M',
            'L'
        ])

        const cart = ref(0)

        function addToCart() {
            cart.value += 1
        }

        const title = computed(() => {
            if (onSale.value) {
                return brand.value + ' ' + product.value + " is on sale"
            } else {
                return brand.value + ' ' + product.value
            }
        })

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

        function updateVariant(index) {
            selectedVariant.value = index;
        }

        return {
            title,
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
            updateStock,
            updateVariant
        }
    }
}).mount('#app')