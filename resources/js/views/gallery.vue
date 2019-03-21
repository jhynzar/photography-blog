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

        metaInfo() {
            return {
                meta: this.getFBMetaInfos
            }
        },

        watch: {
            '$route.params.collection': 'getCollectionData'
        },

        created() {
            this.getCollectionData();

            //delegated on click, so only run once, no need to refresh
            $('body').on('click', '#lg-share-facebook, #lg-share-twitter, #lg-share-pinterest', (e) => {
                e.preventDefault();
                console.log('click share');
                console.log(e.currentTarget);

                let details = $('.lg-sub-html');
                let imageLink = $('#lg-download').prop('href');

                console.log(imageLink);

                this.Globals.facebook.shareOverrideOGMeta(window.location.href, details.find('h4'), details.find('p'), imageLink);

                //this.Globals.customMethods.openNewWindow(e.currentTarget.href, null, 0.5 , 0.3);
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

        computed: {
            getFBMetaInfos() {
                console.log('get fb');
                let metaInfos = [
                    {
                        property: 'og:url',
                        content: window.location.href
                    },
                    {
                        property: 'og:type',
                        content: 'article'
                    },
                    {
                        property: 'og:title',
                        content: `'${this.collection.title}' Gallery`
                    },
                    {
                        property: 'og:description',
                        content: `'${this.collection.description}' Gallery description`
                    },
                ];


                //Gallery images
                for (const key in this.collection.gallery) {
                    if (this.collection.gallery.hasOwnProperty(key)) {
                        const element = this.collection.gallery[key];
                        let metaInfo = {};
                        metaInfo.property = 'og:image';
                        metaInfo.content = `${this.Globals.apiUrl}${element.imgPath}`;

                        metaInfos.push(metaInfo);
                    }
                }

                return metaInfos;
            }
        }
    }
</script>
