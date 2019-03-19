<template>
    <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 item" data-aos="fade" :data-src="fullImgPath" :data-sub-html="`<h4>${title}</h4><p>${description}</p>`">
    <a href="#"><img :src="fullImgPath" alt="IMage" class="img-fluid"></a>
    </div>
</template>

<script>
export default {
    props: ['title', 'description', 'imgPath'],

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

