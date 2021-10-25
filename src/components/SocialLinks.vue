<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-2 col-md-1 link" v-for="socialLink in socialLinks" :key="socialLink.name">
                <a :href="socialLink.url" class="logo">
                    <SVGGenerator :siteName="socialLink.name"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
 
// import svgfile from "../assets/instagram.svg";
import SVGGenerator from './svgGenerator.vue';

export default {
    name: "SocialLinks",
    components: {
        SVGGenerator,
    },
    data() {
        return {
            socialLinks: [
                {
                    name: "Instagram",
                    url: "https://www.instagram.com/gidonymusicofficial",
                },
                {
                    name: "Spotify",
                    url: "https://open.spotify.com/artist/1s74HokA1YSJlweb1Wf30J",
                },
                {
                    name: "Youtube",
                    url: "https://www.youtube.com/channel/UCOU1pBOcOiNzP8SWPX_slbw",
                },
                {
                    name: "Soundcloud",
                    url: "https://soundcloud.com/gideon-grossman",
                }
            ]
        }
    },
    methods: {
    }
}
</script>

<style scoped>
.social-link {
    width: 50px;
}
.logo {
  width: 28px;
  height: 28px;
  margin-right: 10px;
  color: white;
}

.logo:hover {
    /* height: 32px;
    width: 32px; */
    transform: scale(1.5);
}
</style>
