<template>
  <ion-page>

    <ion-header>
      <ion-toolbar style="--background: transparent">

<!--         This button has to be on all views, can it be in a component? -->
        <ion-button fill="clear" background="transparent" slot='start'>
          <ion-menu-button color="dark"></ion-menu-button>
        </ion-button>
        
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
    
      <ContactForm>
      </ContactForm>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/vue';
import { defineComponent, } from 'vue';
import ContactForm from '../components/ContactForm.vue';

export default defineComponent({
  name: 'Contact',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    ContactForm
  }
});
</script>

<style>

</style>