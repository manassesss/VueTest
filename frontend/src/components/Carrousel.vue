<template>
    <b-carousel
        :autoplay="true"
        with-carousel-list
        :indicator="false"
        :overlay="gallery"
       >
        <b-carousel-item v-for="(item, i) in items" :key="i">
            <figure class="image">
                <img :src="item.image">
            </figure>
        </b-carousel-item>
    </b-carousel>
</template>

<script>
export default {
    data() {
        return {
            gallery: false,
            al: {
                hasGrayscale: true,
                itemsToShow: 2,
                breakpoints: {
                    768: {
                        hasGrayscale: false,
                        itemsToShow: 4
                    },
                    960: {
                        hasGrayscale: true,
                        itemsToShow: 6
                    }
                }
            },
            items: [
                {
                    title: 'Slide 1',
                    image: 'https://raw.githubusercontent.com/manassesss/VueTest/master/frontend/src/assets/Carrousel.png'
                },
                {
                    title: 'Slide 2',
                    image: 'https://raw.githubusercontent.com/manassesss/VueTest/master/frontend/src/assets/Carrousel2.png'
                },
            ]
        }
    },
    methods: {
        switchGallery(value) {
            this.gallery = value
            if (value) {
                document.documentElement.classList.add('is-clipped')
            } else {
                document.documentElement.classList.remove('is-clipped')
            }
        }
    }
}
</script>