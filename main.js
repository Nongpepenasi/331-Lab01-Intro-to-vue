const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Very good boots')
        return {
            product, description
        }
    }
}).mount('#app')