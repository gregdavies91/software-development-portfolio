<template>
  <ion-app>
    <Menu></Menu>
  </ion-app>
</template>

<script lang="ts">
import { IonApp } from '@ionic/vue';
import { defineComponent } from 'vue';
import Menu from './components/Menu.vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    Menu
  }
})
</script>