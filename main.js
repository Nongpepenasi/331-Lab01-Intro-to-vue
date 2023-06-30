const { createApp, ref, computed,reactive } = Vue

const app = createApp({
    setup(){
        const cart = ref([])
        // const cartView = computed(() => cart.value.length)
        const cartView = computed(() => {
            const count = {}
            cart.value.forEach((item) => {
                if (count[item]) {
                    count[item] += 1
                } else {
                    count[item] = 1
                }
            })
            return count
        })
        const premium = ref(true)

        function updateCart(id) {
            // cartView.value += 1
            cart.value.push(id)
        }

        function removeFromCart(id) {
            const index = cart.value.findIndex((item) => item === id)
            if (index !== -1) {
                cart.value.splice(index, 1);
            }
          }

        return {
            cart,
            cartView,
            premium,
            updateCart,
            removeFromCart
        }
    }
})

app.component('product-display', productDisplay)
app.component('product-details', productDetails)
app.component('review-form', reviewForm)
app.component('review-list', reviewList)

app.mount('#app')