<template>
  <ion-app>
    <header>
        <ion-button slot='start'>
          <ion-menu-button></ion-menu-button>
        </ion-button>
    </header>
    
    <ion-split-pane content-id='main'>
      <Menu></Menu>
    </ion-split-pane>

  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonButton, IonMenuButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from './components/Menu.vue';


export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonButton,
    IonMenuButton,
    Menu
  }
})
</script>