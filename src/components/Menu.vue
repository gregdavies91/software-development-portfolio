<template>
<ion-menu side="start" content-id="main-content">
      <ion-header>
        <ion-toolbar translucent>
          <ion-title></ion-title>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-icon name="" slot="start"></ion-icon>
            <ion-label router-link="/home">About</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="" slot="start"></ion-icon>
            <ion-label>Experience</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="" slot="start"></ion-icon>
            <ion-label>Projects</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="" slot="start"></ion-icon>
            <ion-label>Resume</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon name="" slot="start"></ion-icon>
            <ion-label>Contact</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    </div>
</template>
<style>

</style>

<script>
import { 
  IonContent, 
  IonHeader, 
  IonItem, 
  IonList, 
  IonMenu, 
  IonTitle, 
  IonToolbar,
  menuController
} from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  components: {
    IonContent, 
    IonHeader, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonTitle, 
    IonToolbar
  }
  // methods: {
  //   openFirst() {
  //     menuController.enable(true, 'first');
  //     menuController.open('first');
  //   },
  //   openEnd() {
  //     menuController.open('end');
  //   },
  //   openCustom() {
  //     menuController.enable(true, 'custom');
  //     menuController.open('custom');
  //   }
  // }
})
</script>