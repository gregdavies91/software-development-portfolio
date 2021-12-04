<template>
  <ion-page>

      <ion-header>
        <ion-toolbar style="--background: transparent">

          <ion-button fill="clear" background="transparent" slot='start'>
            <ion-menu-button color="dark"></ion-menu-button>
          </ion-button>
          
        </ion-toolbar>
      </ion-header>

    <ion-content>
      
    
      <div class="container" id="container">
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-sm>
            <div class="trigger">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/gregdavies91"><img src="../assets/images/landscape.png"></a>
            </div>
            <div class="hidden">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/gregdavies91"><img src="../assets/images/landscape.png" style="opacity: 50%;"></a>
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/gregdavies91"><img src="../assets/images/landscape.png"></a>
          </ion-col>
          <ion-col size="12" size-sm>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/gregdavies91"><img src="../assets/images/landscape.png"></a>
          </ion-col>
          <ion-col size="12" size-sm>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/gregdavies91"><img src="../assets/images/landscape.png"></a>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
    </ion-content>

  </ion-page>
      
  
</template>

<style scoped>


@media (max-width: 575px) {
  #container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  transform: translateY(-50%);
} 

  ion-grid {

  position: fixed;
  
  }
}

.hidden { display: none; }
.trigger:hover + .hidden { display: inline; }

</style>

<script lang="ts">

import { 
    IonHeader, 
    IonPage, 
    IonToolbar, 
    IonContent
} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Experience",
  components: { 
    IonHeader, 
    IonPage, 
    IonToolbar, 
    IonContent
  }
});

      
</script>

