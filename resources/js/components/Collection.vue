<template>
    <div class="swiper-slide">
        <div class="image-wrap">
            <div class="image-info">
                <h2 class="mb-3">{{ this.title }}</h2>
                <a href="single.html" class="btn btn-outline-white py-2 px-4">More Photos</a>
            </div>
            <img :src="fullImgPath" :alt="coverImg">
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'coverImg', 'imgPath'],

    data() {
        return {
            Globals
        }
    },

    computed: {
        fullImgPath() {
            return `${this.Globals.apiUrl}${this.imgPath}`
        }
    }
}
</script>

