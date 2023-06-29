const { createApp, ref, computed } = Vue

const app = createApp({
    setup(){
        const cart = ref([])
        const cartView = ref(0)
        const premium = ref(true)
        function updateCart(id) {
            cartView.value += 1
            cart.value.push(id)
        }
        return {
            cart,
            cartView,
            premium,
            updateCart
        }
    }
})

app.component('product-display', productDisplay)
app.component('product-details', productDetails)

app.mount('#app')