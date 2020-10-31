const app = Vue.createApp({
    data() {
        return {
            cart: 10,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            onSale: true,
            // onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    },
    computed: {
      saleStatus() {
        if (this.onSale) {
          return this.brand + ' ' + this.product + ' is on sale'
        } else {
          return ''
        }
      }
    }
})
