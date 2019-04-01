<template>
    <div class="" data-aos="fade">
        <div class="container-fluid">

            <div class="row justify-content-center">
                <div class="col-md-7">
                    <div class="row mb-5 site-section">
                        <div class="col-12 ">
                            <h2 class="site-section-heading text-center">About Me</h2>
                        </div>
                    </div>

                    <div class="row mb-5">
                        <div class="col-md-7">
                            <img :src="`${Globals.apiUrl}/images/about-me-display-img.png`" alt="Images" class="img-fluid">
                        </div>
                        <div class="col-md-4 ml-auto">
                            <!-- <h3>Our Mission</h3> -->
                            <h3 class="display-4 text-dark">Mj Tapiru</h3>
                            

                            <!-- Body -->
                            <div class="">
                                <p class="text-justify">A Developer and Photography Hobbyist.</p>

                                <p class="text-justify">I like taking candid shots. It is where you can capture the purest 
                                form of people's emotions. The moment when they show their most naked feelings.</p>
                            </div>
                            
                        </div>
                    </div>


                    <!-- <div class="row site-section">
                        <div class="col-md-6 col-lg-6 col-xl-4 text-center mb-5">
                            <img src="public/images/person_1.jpg" alt="Image"
                                class="img-fluid w-50 rounded-circle mb-4">
                            <h2 class="text-black font-weight-light mb-4">Jean Smith</h2>
                            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas
                                facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet
                                quod deleniti impedit sapiente atque tenetur porro?</p>
                            <p>
                                <a href="#" class="pl-0 pr-3"><span class="icon-twitter"></span></a>
                                <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                                <a href="#" class="pl-3 pr-3"><span class="icon-facebook"></span></a>
                            </p>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-4 text-center mb-5">
                            <img src="public/images/person_2.jpg" alt="Image"
                                class="img-fluid w-50 rounded-circle mb-4">
                            <h2 class="text-black font-weight-light mb-4">Claire Smith</h2>
                            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas
                                facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet
                                quod deleniti impedit sapiente atque tenetur porro?</p>
                            <p>
                                <a href="#" class="pl-0 pr-3"><span class="icon-twitter"></span></a>
                                <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                                <a href="#" class="pl-3 pr-3"><span class="icon-facebook"></span></a>
                            </p>
                        </div>
                        <div class="col-md-6 col-lg-6 col-xl-4 text-center mb-5">
                            <img src="public/images/person_4.jpg" alt="Image"
                                class="img-fluid w-50 rounded-circle mb-4">
                            <h2 class="text-black font-weight-light mb-4">John Smith</h2>
                            <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas
                                facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet
                                quod deleniti impedit sapiente atque tenetur porro?</p>
                            <p>
                                <a href="#" class="pl-0 pr-3"><span class="icon-twitter"></span></a>
                                <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                                <a href="#" class="pl-3 pr-3"><span class="icon-facebook"></span></a>
                            </p>
                        </div>
                    </div> -->
                </div>

            </div>
        </div>
    </div>
</template>


<script>
    export default {
        created() {

            //run when all initialization is done
            this.$emit('initialized', 'routerView');
        },

        data() {
            return {
                Globals
            }
        },
    }
</script>
