<template>
  <ion-page>

      <ion-header>
        <ion-toolbar style="--background: transparent">

          <ion-button fill="clear" background="transparent" slot='start'>
            <ion-menu-button color="dark"></ion-menu-button>
          </ion-button>
          
        </ion-toolbar>
      </ion-header>

      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
          <img src='../assets/images/landscape.png'>
        </ion-slide>
        <ion-slide>
          <h1>Slide 2</h1>
        </ion-slide>
        <ion-slide>
          <h1>Slide 3</h1>
        </ion-slide>
      </ion-slides>

  </ion-page>
      
  
</template>

<style>
  #experience {
    display:  flex;
    position: center;
  }
</style>

<script>
import { IonHeader, IonPage, IonToolbar, IonSlides, IonSlide } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Experience",
  components: { IonHeader, IonPage, IonToolbar, IonSlides, IonSlide },
  setup() {
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    const slideOpts = {
      initialSlide: 1,
      speed: 400
    };

    return { slideOpts }
  }
});
</script>

