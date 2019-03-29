<template>
    <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 item d-flex justify-content-between align-items-center px-4" :data-tweet-text="shareText" :data-pinterest-text="shareText" data-aos="fade" :data-src="`${fullImgPath}`" :data-sub-html="`<h4>${title}</h4><p>${description}</p>`">
    <a :href="fullImgPath" class="w-100 d-flex align-items-center justify-content-between"><img :src="fullImgPath" alt="IMage" class="img-thumbnail mx-auto p-2" style="border-width: 0.5em; border-color: #141414; background-color: #353535;"></a>
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

