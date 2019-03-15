Vue.component('footer-template', {
    template: `
        <div class="footer py-4">
            <div class="container-fluid">
                <p>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy;{{getCurrentYear}} All rights reserved | This template is made with <i class="icon-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                </p>
            </div>
        </div>
    `,

    computed: {
        getCurrentYear() {
            return new Date().getFullYear();
        }
    }
});
