const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Very good boots')
        const image = ref('./assets/images/socks_green.jpg')
        const camtWebsite = ref('https://www.camt.cmu.ac.th/')
        return {
            product, description, image, camtWebsite
        }
    }
}).mount('#app')