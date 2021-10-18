<template>
  <div id="app">
    <div class="content">
      <Header/>
      <SocialLinks class="mt-4"/>

      <div class="row mt-5 mb-3 justify-content-center">
        My Music
      </div>
      <div class="row my-row">
        <button class="my-button" @click.prevent = "getSong('Brightness_Spotify')">Brightness</button>
      </div>
      <div class="row">
        <button class="my-button" @click.prevent = "getSong('Do_Whatever_Makes_You_Happy_Spotify')">Do Whatever Makes You Happy</button>
      </div>

      <div class="row mt-5 mb-3 justify-content-center">
        Support
      </div>
      <div class="row">
        <button class="my-button" @click.prevent = "getSupportLink('Patreon')">Patreon</button>
      </div>
      <div class="row">
        <button class="my-button" @click.prevent = "getSupportLink('Venmo')">Venmo</button>
      </div>

      <div class="row mt-5 mb-3 justify-content-center">
        Merch
      </div>
      <div class="row">
        <button class="my-button" @click.prevent = "getMerch('TShirt')">TShirt</button>
      </div>
      <div class="row">
        <button class="my-button" @click.prevent = "getMerch('Stickers')">Stickers</button>
      </div>


    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import SocialLinks from './components/SocialLinks.vue'
import { getLink } from './linkService.js'

export default {
  name: 'App',
  components: {
    Header,
    SocialLinks
  },
  methods: {
    getSong(label) {
      return this.getLinkFromServer('MusicLinks', label);
    },
    getMerch(label) {
      return this.getLinkFromServer('Merch', label);
    },
    getSupportLink(label) {
      return this.getLinkFromServer('Support', label);
    },
    async getLinkFromServer(category, label) {
      //hardcode test
      console.log('in get Link ' );
      var linkUrl = await getLink(category, label);
      console.log('linkUrl: ' + linkUrl);
      // open new page at URL
      window.open(linkUrl);
      return linkUrl;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* background: linear-gradient(0deg, rgb(200, 100, 100), rgb(58, 78, 255)); */
  background-image: url('./assets/DarkerPalmTreesBackground.jpeg');
  background-repeat: repeat;
  background-size: 30%;
  color: white;
  font-weight: bold;
  padding: 1em;
  height: 100%;
}

.content {
  padding: 2em 23em;
}

.my-button {
  z-index: 0;
  overflow: hidden;
  margin-bottom: 16px;
  transition: box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s, background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;
  border: 2px solid rgb(255, 255, 255);
  background-color: transparent;
  color: rgb(255, 255, 255);
  border-radius: 0px;
  font-weight: bold;
  padding: 1em;

}
.my-button:hover {
  box-shadow:
    inset 0 0 50px #000,      /* inner white */
    0 0 50px #fff,            /* outer white */
    -1px 0 8px #f0f,        /* outer left magenta */
    1px 0 8px #0ff;         /* outer right cyan */
}
</style>
