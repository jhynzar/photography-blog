<template>
    <div>

        <div class="site-mobile-menu">
            <div class="site-mobile-menu-header">
            <div class="site-mobile-menu-close mt-3">
                <span class="icon-close2 js-menu-toggle"></span>
            </div>
            </div>
            <div class="site-mobile-menu-body"></div>
        </div>
        



        <header class="site-navbar py-3" role="banner">

            <div class="container-fluid">
            <div class="row align-items-center">
                
                <div class="col-6 col-xl-2" data-aos="fade-down">
                <h1 class="mb-0"><router-link to="/" exact class="text-black h2 mb-0">Photon</router-link></h1>
                </div>
                <div class="col-10 col-md-8 d-none d-xl-block" data-aos="fade-down">
                <nav class="site-navigation position-relative text-right text-lg-center" role="navigation">

                    <ul class="site-menu js-clone-nav mx-auto d-none d-lg-block">
                    <router-link tag="li" to="/" exact><a>Home</a></router-link>
                    <router-link tag="li" to="/single" class="has-children">
                        <a>Gallery</a>
                        <ul class="dropdown">
                        <li v-for="(collection, index) in collections" :key="index">
                            <router-link :to="collection.link">{{collection.title}}</router-link>
                        </li>
                        </ul>
                    </router-link>
                    <router-link tag="li" to="/services"><a>Services</a></router-link>
                    <router-link tag="li" to="/about"><a>About</a></router-link>
                    <router-link tag="li" to="/contact"><a>Contact</a></router-link>
                    </ul>
                </nav>
                </div>

                <div class="col-6 col-xl-2 text-right" data-aos="fade-down">
                <div class="d-none d-xl-inline-block">
                    <ul class="site-menu js-clone-nav ml-auto list-unstyled d-flex text-right mb-0" data-class="social">
                    <li>
                        <a href="#" class="pl-0 pr-3"><span class="icon-facebook"></span></a>
                    </li>
                    <li>
                        <a href="#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>
                    </li>
                    <li>
                        <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                    </li>
                    <li>
                        <a href="#" class="pl-3 pr-3"><span class="icon-youtube-play"></span></a>
                    </li>
                    </ul>
                </div>

                <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style="position: relative; top: 3px;"><a href="#" class="site-menu-toggle js-menu-toggle text-black"><span class="icon-menu h3"></span></a></div>

                </div>

            </div>
            </div>
            
        </header>
    </div>
</template>

<script>
export default {
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
                this.$emit('initialized','headerTemplate');
            });
    }
}
</script>
