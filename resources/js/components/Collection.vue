<template>
    <div class="swiper-slide">
        <div class="image-wrap">
            <div class="image-info">
                <h2 class="mb-3">{{ this.title }}</h2>
                <router-link :to="`/collections/${link}`" class="btn btn-outline-white py-2 px-4">More Photos</router-link>
            </div>
            <img :data-src="fullImgPath" :alt="coverImg" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'coverImg', 'coverImgPath', 'link'],

    data() {
        return {
            Globals
        }
    },

    computed: {
        fullImgPath() {
            return `${this.Globals.apiUrl}${this.coverImgPath}`
        }
    }
}
</script>

