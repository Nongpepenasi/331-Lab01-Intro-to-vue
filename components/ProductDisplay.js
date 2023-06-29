const productDisplay = {
    template:
        /*html*/
    `
    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image" :class="{ 'out-of-stock-img': !inStock }">
            </div>
        </div>
        <div class="product-info">
             <h1><a :href="camtWebsite">{{title}}</a></h1>
            <h2>{{description}}</h2>
            <p v-if="inventory > 10 && inStock">In Stock</p>
            <p v-else-if="inventory <= 10 && inventory > 0">Almost out of stock</p>
            <p v-else">Out of Stock</p>
            <p>Shipping: {{shipping}}</p>
            <p v-if="onSale">On Sale</p>
            <p v-else>Not On Sale</p>
            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>
            <div v-for="(variant,index) in variants" :key="variant.id"
            @mouseover = "updateVariant(index)" 
            class="color-circle" :style="{backgroundColor: variant.color}">
                {{variant.color}}
            </div>
            <ul>
                <p><b>Sock Size:</b></p>
                <li v-for="sockSize in sockSizes">{{sockSize}}</li>
            </ul>
            <button class="button" :disabled="!inStock" @click="addToCart"
            :class="{disabledButton: !inStock}">Add To Cart</button>
            <button class="button" @click="updateStock">Update Stock</button>
        </div>
    </div>
    `,
    props: {
        premium: Boolean
    },
    setup(props){
        const shipping = computed(() => {
            if (props.premium) {
                return 'Free'
            } else {
                return 30
            }
        })
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
            variants.value[selectedVariant.value].quantity = inStock.value ? 0 : 50;
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
            updateVariant,
            shipping
        }
    }
}