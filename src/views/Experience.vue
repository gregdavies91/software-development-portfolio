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
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/gregdavies91"><img src="../assets/images/landscape.png"><p>Face To The Light Ltd.</p></a>
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="trigger">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/gregdavies91"><img src="../assets/images/landscape.png"><p>Weengs Ltd.</p></a>
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="trigger">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/gregdavies91"><img src="../assets/images/landscape.png"><p>Vallie Ltd.</p></a>
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="trigger">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/gregdavies91"><img src="../assets/images/landscape.png"><p>Unlimit Ltd.</p></a>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
    </ion-content>

  </ion-page>
      
  
</template>

<style scoped>


#container {
  padding-left: 200px;
  padding-right: 200px;
}

@media (max-width: 1750px) {
  #container {
    padding-left: 50px;
  padding-right: 50px;
  }
}

@media (max-width: 575px) {
  #container {
  
  padding-left: 0px;
  padding-right: 0px;

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

.trigger p {

  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
}

.trigger:hover p {
  
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: visible;
  transition-property: visibility;
  transition-delay: 0.2s;
  transition-duration: 1s;
}

.trigger { 
  
  
}
.trigger:hover { 

  opacity: 50%;
  transition-property: opacity;
  transition-duration: 0.5s;
  
}

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

