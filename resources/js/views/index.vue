<template>
  <div class="container-fluid" data-aos="fade" data-aos-delay="500">
      <div class="swiper-container images-carousel">
          <div class="swiper-wrapper">
            <collection 
              v-for="(collection, index) in collections" 
              :key="index" 
              :title="collection.title" 
              :coverImg="collection.coverImg" 
              :coverImgPath="collection.coverImgPath"
              :link="collection.link"></collection>
          </div>

          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-scrollbar"></div>
      </div>
  </div>
</template>


<script>
import Collection from '../components/Collection.vue';

export default {
  components: {
    'collection': Collection
  },

  data() {
    return {
      Globals,
      collections: []
    }
  },

  mounted() {
    axios.get(`${this.Globals.apiUrl}/api/collections`)
      .then(({data}) => {
        this.collections = data;

        //run when all initialization is done
        this.$emit('initialized','routerView');
      });
  },
}
</script>
