<template>
<section>
    <b-navbar>
      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a href="/signup" class="button is-primary">
              <strong>Cadastrar</strong>
            </a>
            <a href="/login" class="button is-primary is-light">
              <strong>Entrar</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <b-carousel
        :autoplay="true"
        interval="2000"
        with-carousel-list
        :indicator="false"
        :overlay="gallery"
        @click="switchGallery(true)">
        <b-carousel-item v-for="(item, i) in items" :key="i">
            <figure class="image">
                <img :src="item.image">
            </figure>
        </b-carousel-item>
        <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-medium"/>
    </b-carousel>
    </section>
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
                    image: 'https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530990_960_720.jpg'
                },
                {
                    title: 'Slide 2',
                    image: 'https://cdn.pixabay.com/photo/2016/10/18/08/52/blood-pressure-monitor-1749577_960_720.jpg'
                },
                {
                    title: 'Slide 3',
                    image: 'https://cdn.pixabay.com/photo/2021/04/10/00/51/vaccine-6165772_960_720.jpg'
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