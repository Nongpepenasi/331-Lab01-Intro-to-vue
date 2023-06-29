const { createApp, ref, computed } = Vue

const app = createApp({
    setup(){
        const cart = ref(0)
        const premium = ref(false)
        const details = ref([
            'Detail 1',
            'Detail 2',
            'Detail 3'
        ])
        return {
            cart,
            premium,
            details
        }
    }
})

app.component('product-display', productDisplay)
app.component('product-details', productDetails)

app.mount('#app')