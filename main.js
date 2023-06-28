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
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            {id: 2234, color: 'green'},
            {id: 2235, color: 'blue'}
        ])
        const sockSizes = ref([
            'S',
            'M',
            'L'
        ])
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
            sockSizes
        }
    }
}).mount('#app')