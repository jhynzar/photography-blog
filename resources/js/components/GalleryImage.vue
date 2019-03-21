<template>
    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" :data-tweet-text="shareText" :data-pinterest-text="shareText" data-aos="fade" :data-src="`${fullImgPath}`" :data-sub-html="`<h4>${title}</h4><p>${description}</p>`">
    <a :href="fullImgPath"><img :src="fullImgPath" alt="IMage" class="img-fluid"></a>
    </div>
</template>

<script>
export default {
    props: ['title', 'description', 'imgPath'],

    data() {
        return {
            Globals,
            shareText: 'Check this out!'
        }
    },

    computed: {
        fullImgPath() {
            return `${this.Globals.apiUrl}${this.imgPath}`
        }
    }
}
</script>

