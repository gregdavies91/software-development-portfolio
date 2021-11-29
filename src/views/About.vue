<template>
  <ion-page>

<ion-header>
      <ion-toolbar style="--background: transparent">

<!--   This button has to be on all views, can it be in a component? -->
        <ion-button fill="clear" slot='start' style="--background-hover-opacity: 0%">
          <ion-menu-button color="dark" style="--background-hover-opacity: 0%"></ion-menu-button>
        </ion-button>

      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
    
      <div id="container">
        <strong>Greg Davies</strong>
        <p>Software Developer</p>
        <p><a target="_blank" rel="noopener noreferrer" href="https://github.com/gregdavies91">View GitHub Profile</a></p>
        <p><a class="badge-base__link LI-simple-link" href="https://uk.linkedin.com/in/gregdavies91?trk=profile-badge">View LinkedIn Profile</a></p>
        <!-- <Linkedin>
        </Linkedin> -->
              
      </div>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
// import Linkedin from '@/components/Linkedin.vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar
    // Linkedin
    // IonButton,
    // IonMenuButton
  }
});
</script>

<style scoped>
ion-content {
  font-family: Office Code Pro !important;
  font-size: 1.2em;
}
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>