<template>

<!--   <header :class="{ 'scrolled-nav': scrolledPostition }"> -->

  <ion-menu type="overlay" side="start" menu-id="first" class="my-custom-menu" content-id="main">

<!--     <div class="branding">
      <img src="../assets/icon.png" alt="" />
    </div>   -->

    <ion-content>
      <ion-list>

        <router-link to="/about">
          <ion-item>About</ion-item>
        </router-link>
        <router-link to="/experience">
          <ion-item>Experience</ion-item>
        </router-link>
        <router-link to="/projects">
          <ion-item>Projects</ion-item>
        </router-link>
        <router-link to="/resume">
          <ion-item>Resume</ion-item>
        </router-link>
        <router-link to="/contact">
          <ion-item>Contact</ion-item>
        </router-link>

      </ion-list>
    </ion-content>
  </ion-menu>

<!--   </header> -->
<ion-router-outlet id="main"></ion-router-outlet>
</template>
<style>
.my-custom-menu {
  --width: 500px;
}
</style>

<script>
import { 
  IonContent, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonRouterOutlet,
  menuController
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    IonContent, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonRouterOutlet
  },
  methods: {
    openFirst() {
      menuController.enable(true, 'first');
      menuController.open('first');
    },
    openEnd() {
      menuController.open('end');
    },
    openCustom() {
      menuController.enable(true, 'custom');
      menuController.open('custom');
    }
  }
});
</script>