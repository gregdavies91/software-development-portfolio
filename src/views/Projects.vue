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
              <a target="_blank" rel="noopener noreferrer" href="https://simplistic.fun"><img src="../assets/images/ss.png"></a>
            </div>   
            <div class="text">
              <p style="color: white;">Simplistic Scientists Bootstrap Website
              <br>
              A website made using bootstrap for an online hiphop band. Learned about the basics of using Bootstrap and further perfected HTML and CSS skills.
              </p>
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="trigger">
              <a target="_blank" rel="noopener noreferrer" href="http://x2international.com"><img src="../assets/images/x2.png"></a>
            </div>
            <div class="text">
              <p style="color: white;">X2 International Webflow Website
              <br>
              As Sales Executive, delivered a website made by the team using Webflow to the customer. Learned the basics of HTML, CSS and using tools like Webflow to make websites.
              </p>
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

.trigger + .text {

  display:  none;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;

  
}

.trigger:hover + .text {
  
  opacity:  100%;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: visible;
  transition-property: visibility;
  transition-delay: 0.2s;
  transition-duration: 1s;
  display: flex;
  
}

.trigger { 
  
  opacity: 100%;
  transition-property: opacity;
  transition-duration: 0.5s;
  
}
.trigger:hover { 
  
  opacity: 20%;
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
  name: "Projects",
  components: { 
    IonHeader, 
    IonPage, 
    IonToolbar, 
    IonContent
  }
});

      
</script>

