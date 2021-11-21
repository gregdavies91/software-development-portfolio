<template>

  <ion-menu side="start" menu-id="first" class="my-custom-menu" content-id="main" :style='{ width: menuWidth }'>

    <span>
        <ion-button color="dark" slot='start'>
          <ion-menu-button color="dark"></ion-menu-button>
        </ion-button>
    </span>

    <ion-content>
      <ion-list>
        <!-- Trying to get the @click to close the menu when a view is selected from the menu -->
        <router-link class="link" to="/about" @click='menuController'>
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

<ion-router-outlet id="main"></ion-router-outlet>
</template>
<style>
.hide {
  display: none;
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
  props: {},
  setup() {
    return {
    IonContent, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonRouterOutlet
    }
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