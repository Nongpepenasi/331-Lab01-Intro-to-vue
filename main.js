const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Very good boots')
        const image = ref('./assets/images/socks_green.jpg')
        const camtWebsite = ref('https://www.camt.cmu.ac.th/')
        const inStock = ref(false)
        const inventory = ref(100)
        const onSale = ref(true)
        return {
            product, 
            description, 
            image, 
            camtWebsite, 
            inStock, 
            inventory,
            onSale
        }
    }
}).mount('#app')