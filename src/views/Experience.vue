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
              <a target="_blank" rel="noopener noreferrer" href="https://facetothelight.com"><img src="../assets/images/facetothelight.png"></a>
            </div>
            <div class="text">
              <p style="color: white;">Face To The Light Ltd. - Product Owner
              <br>
              Overseeing all aspects of landing page creation, from copywriting, to UX/UI, to constant Conversion Rate Optimisation through data-driven A/B tests.
              </p>
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="trigger">
              <a target="_blank" rel="noopener noreferrer" href="https://weengs.co.uk"><img src="../assets/images/weengs.png"></a>
            </div>
            <div class="text">
              <p style="color: white;">Weengs Ltd. - Product Owner
              <br>
              Planned and estimated 2-week sprints in a realistic yet time-efficient manner that allowed the teams to deliver 97% of the MVP according to the company roadmap.
              </p>
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="trigger">
              <a target="_blank" rel="noopener noreferrer" href="https://techcrunch.com/2015/11/16/vallie-takes-the-luxe-valet-parking-model-and-puts-it-in-london/"><img src="../assets/images/vallie.png"></a>
            </div>
            <div class="text">
              <p style="color: white;">Vallie Ltd. - Ops Manager
              <br>
              Demonstrated their ability to manage a team and achieve results under outstanding pressure.
              </p>
            
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="trigger">
              
              <a target="_blank" rel="noopener noreferrer" href="https://unlimit.co.uk"><img src="../assets/images/unlimit.png"></a>
              
            </div>
            <div class="text">
            <p style="color: white;">Unlimit Ltd. - Director</p>
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
  name: "Experience",
  components: { 
    IonHeader, 
    IonPage, 
    IonToolbar, 
    IonContent
  }
});

      
</script>

