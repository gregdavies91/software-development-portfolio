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
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="triggerweengs">
              <a class="triggerweengs" target="_blank" rel="noopener noreferrer" href="https://weengs.co.uk"></a>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12" size-sm>
            <div class="triggervallie">
              <a class="triggervallie" target="_blank" rel="noopener noreferrer" href="https://techcrunch.com/2015/11/16/vallie-takes-the-luxe-valet-parking-model-and-puts-it-in-london/"></a>
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="triggerunlimit">
              <a class="triggerunlimit" target="_blank" rel="noopener noreferrer" href="https://unlimit.co.uk"></a>
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
  padding-left: 100px;
  padding-right: 100px;

}

@media (max-width: 1075px) {
  #container {
  
  padding-left: 0px;
  padding-right: 0px;
  text-align: center;
  
  position: absolute;
  left: 50%;
  right: 0;
  top: 0;
  transform: translate(-50%, -50%);
  }
 

  ion-grid {

  position: absolute;
  
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

.triggerfttl { 
  
  width: auto;
  height: auto;
  min-height: 200px;
  min-width: 340px;
  background: url('../assets/images/facetothelight.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  transition: background 0.25s ease-out;;

  
}
.triggerfttl:hover { 
  
  width: auto;
  height: auto;
  min-height: 200px;
  min-width: 340px;
  background: url('../assets/images/fttltext.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  transition: background 0.25s ease-in;

  
}

.triggerweengs { 
  
  width: auto;
  height: auto;
  min-height: 200px;
  min-width: 340px;
  background-image: url('../assets/images/weengs.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;

  
}
.triggerweengs:hover { 
  
  width: auto;
  height: auto;
  min-height: 200px;
  min-width: 340px;
  background-image: url('../assets/images/weengstext.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;

}
.triggervallie { 
  
  width: auto;
  height: auto;
  min-height: 200px;
  min-width: 340px;
  background-image: url('../assets/images/vallie.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  
}
.triggervallie:hover { 
  
  width: auto;
  height: auto;
  min-height: 200px;
  min-width: 340px;
  background-image: url('../assets/images/vallietext.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;

  
}
.triggerunlimit { 
  
  width: auto;
  height: auto;
  min-height: 200px;
  min-width: 340px;
  background-image: url('../assets/images/unlimit.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  
  
}
.triggerunlimit:hover { 
  
  width: auto;
  height: auto;
  min-height: 200px;
  min-width: 340px;
  background-image: url('../assets/images/unlimittext.png') no-repeat;
  background-size: 100% 100%;
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

