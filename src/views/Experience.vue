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
            <div class="triggerfttl">
              <a class="triggerfttl" target="_blank" rel="noopener noreferrer" href="https://facetothelight.com"></a>
            </div>
            <!-- <div class="text"> -->
              <!-- <p style="color: white;">Face To The Light Ltd. - Product Owner
              <br>
              <br>
              Overseeing all aspects of landing page creation, from copywriting, to UX/UI, to constant Conversion Rate Optimisation through data-driven A/B tests.
              </p> -->
            <!-- </div> -->
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="triggerweengs">
              <a class="triggerweengs" target="_blank" rel="noopener noreferrer" href="https://weengs.co.uk"></a>
            </div>
            <!-- <div class="text"> -->
              <!-- <p style="color: white;">Weengs Ltd. - Product Owner
              <br>
              <br>
              Planned and estimated 2-week sprints in a realistic yet time-efficient manner that allowed the teams to deliver 97% of the MVP according to the company roadmap.
              </p>
              <img src="../assets/images/weengstext.png" class="imgtext"> -->
            <!-- </div> -->
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12" size-sm>
            <div class="triggervallie">
              <a class="triggervallie" target="_blank" rel="noopener noreferrer" href="https://techcrunch.com/2015/11/16/vallie-takes-the-luxe-valet-parking-model-and-puts-it-in-london/"></a>
            </div>
            <!-- <div class="text"> -->
              <!-- <p style="color: white;">Vallie Ltd. - Ops Manager
              <br>
              <br>
              Demonstrated their ability to manage a team and achieve results under outstanding pressure.
              </p> -->
            
            <!-- </div> -->
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="triggerunlimit">
              
              <a class="triggerunlimit" target="_blank" rel="noopener noreferrer" href="https://unlimit.co.uk"></a>
              
            </div>
            <!-- <div class="text">
            <p style="color: white;">Unlimit Ltd. - Director
            <br>
            <br>
            While holding this Senior post gained relevant marketing experience in an executive role as Director in partnership with the software engineer team.
            </p>
          </div> -->
            
            
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
    </ion-content>

  </ion-page>
      
  
</template>

<style scoped>

#container {
  padding-left: 100px;
  padding-right: 100px;
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

/*.trigger + .text {

  display: none;
  
  
}

.trigger:hover + .text {
  
  position: absolute;
  display: inherit;

  
}*/

.triggerfttl { 
  
  width: 100%;
  height: auto;
  transition-property: background-image;
  transition-duration: 0.5s;
  background-image: url('../assets/images/weengs.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: inline-block;
  
}
.triggerfttl:hover { 
  
  width: 100%;
  height: auto;
  transition-property: background-image;
  transition-duration: 0.5s;
  background-image: url('../assets/images/weengstext.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: inline-block;
  
}

.triggerweengs { 
  
  width: 100%;
  height: auto;
  transition-property: background-image;
  transition-duration: 0.5s;
  background-image: url('../assets/images/weengs.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: inline-block;
  
}
.triggerweengs:hover { 
  
  width: 100%;
  height: auto;
  transition-property: background-image;
  transition-duration: 0.5s;
  background-image: url('../assets/images/weengstext.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: inline-block;
  
}
.triggervallie { 
  
  width: 100%;
  height: auto;
  transition-property: background-image;
  transition-duration: 0.5s;
  background-image: url('../assets/images/weengs.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: inline-block;
  
}
.triggervallie:hover { 
  
  width: 100%;
  height: auto;
  transition-property: background-image;
  transition-duration: 0.5s;
  background-image: url('../assets/images/weengstext.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: inline-block;
  
}
.triggerunlimit { 
  
  width: 100%;
  height: auto;
  transition-property: background-image;
  transition-duration: 0.5s;
  background-image: url('../assets/images/weengs.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: inline-block;
  
}
.triggerunlimit:hover { 
  
  width: 100%;
  height: auto;
  transition-property: background-image;
  transition-duration: 0.5s;
  background-image: url('../assets/images/weengstext.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: inline-block;
  
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

