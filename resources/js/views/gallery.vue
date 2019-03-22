<template>
  <div class="site-section"  data-aos="fade">
      <div class="container-fluid">
      
          <div class="row justify-content-center">
              
              <div class="col-md-7">
              <div class="row mb-5">
                  <div class="col-12 ">
                  <h2 class="site-section-heading text-center">{{ collection.title }}</h2>
                  </div>
              </div>
              </div>
          
          </div>
          <div class="row" id="lightgallery">
              <gallery-image 
                v-for="(galleryImg, index) in collection.gallery" 
                :key="index"
                :title="galleryImg.title"
                :description="galleryImg.description"
                :imgPath="galleryImg.imgPath"></gallery-image>

          </div>
      </div>
  </div>
</template>


<script>
    import GalleryImage from '../components/GalleryImage.vue';

    export default {
        components: {
            'gallery-image': GalleryImage
        },

        data() {
            return {
                Globals,
                collection: {},
            }
        },

        watch: {
            '$route.params.collection': 'getCollectionData'
        },

        created() {
            this.getCollectionData();

            /**
             * FACEBOOK SHARE
             */
            $('body').on('click', '#lg-share-facebook', (e) => {
                e.preventDefault();
                console.log('click share');
                console.log(e.currentTarget);

                let details = $('.lg-sub-html');
                let imageLink = $('#lg-download').prop('href');

                console.log(imageLink);

                VueEventListener.$emit('facebookShare', {
                    url: window.location.href,
                    title: details.find('h4'),
                    description: details.find('p'),
                    image: imageLink
                });

                //this.Globals.customMethods.openNewWindow(e.currentTarget.href, null, 0.5 , 0.3);
            });

            /**
             * lightgallery.js Sharer
             */
            //delegated on click, so only run once, no need to refresh
            $('body').on('click', '#lg-share-twitter, #lg-share-pinterest', (e) => {
                e.preventDefault();

                let details = $('.lg-sub-html');
                let imageLink = $('#lg-download').prop('href');

                this.Globals.customMethods.openNewWindow(e.currentTarget.href, null, 0.5 , 0.3);
            });
        },

        methods: {
            getCollectionData() {
                axios.get(`${this.Globals.apiUrl}/api/collections/${this.$route.params.collection}`)
                .then(({data}) => {
                    this.collection = data;

                    //run when all initialization is done
                    this.$emit('initialized','routerView');
                });
            }
        },
    }
</script>
