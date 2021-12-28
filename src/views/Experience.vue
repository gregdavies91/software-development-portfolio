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
              <a class="trigger" target="_blank" rel="noopener noreferrer" href="https://facetothelight.com"></a>
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="triggerweengs">
              <a class="trigger" target="_blank" rel="noopener noreferrer" href="https://weengs.co.uk"></a>
            </div>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="12" size-sm>
            <div class="triggervallie">
              <a class="trigger" target="_blank" rel="noopener noreferrer" href="https://techcrunch.com/2015/11/16/vallie-takes-the-luxe-valet-parking-model-and-puts-it-in-london/"></a>
            </div>
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="triggerunlimit">
              <a class="trigger" target="_blank" rel="noopener noreferrer" href="https://unlimit.co.uk"></a>
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

@media (max-width: 1275px) {
  #container {
  
  padding-left: 100px;
  padding-right: 100px;

  left: 0;
  right: 0;
  top: 0;
  transform: translateY(-50%);

  }
 

  ion-grid {

  position: absolute;
  
  }
}


@media (max-width: 675px) {
  #container {
  
  padding-left: 0px;
  padding-right: 0px;
  
  left: 0;
  right: 0;
  top: 0;
  transform: translateY(-50%);
  }
 

  ion-grid {

  position: absolute;
  
  }
}

.trigger { 
  
  width: 340px;
  height: 200px;
  display: inline-block;
  transition: scale 0.3s ease-out;
  scale: 1;
  
}
.trigger:hover { 
  
  width: 340px;
  height: 200px;
  display: inline-block;
  transition: scale 0.3s ease-in;
  scale: 1.1;
  
}

.triggerfttl { 
  
  width: 340px;
  height: 200px;
  margin: 50px;
  background: url('../assets/images/fttlsprite.png') no-repeat 0px 0px;
  /*background-size: 100% 100%;*/
  display: inline-block;
  transition: scale 0.3s ease-out;
  scale: 1;
  
}
.triggerfttl:hover { 
  
  width: 340px;
  height: 200px;
  margin: 50px;
  background: url('../assets/images/fttlsprite.png') no-repeat 0px -200px;
  /*background-size: 100% 100%;*/
  display: inline-block;
  transition: scale 0.3s ease-in;
  scale: 1.1;
  
}

.triggerweengs { 
  
  margin: 50px;
  background: url('../assets/images/weengs.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  transition: scale 0.3s ease-out;
  scale: 1;

  
}
.triggerweengs:hover { 
  
  margin: 50px;
  background: url('../assets/images/weengstext.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  transition: scale 0.3s ease-in;
  scale: 1.1;

}
.triggervallie { 
  
  margin: 50px;
  background: url('../assets/images/vallie.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  transition: scale 0.3s ease-out;
  scale: 1;
  
}
.triggervallie:hover { 
  
  margin: 50px;
  background: url('../assets/images/vallietext.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  transition: scale 0.3s ease-in;
  scale: 1.1;

  
}
.triggerunlimit { 
  
  margin: 50px;
  background: url('../assets/images/unlimit.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  transition: scale 0.3s ease-out;
  scale: 1;
  
  
}
.triggerunlimit:hover { 
  
  margin: 50px;
  background: url('../assets/images/unlimittext.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  transition: scale 0.3s ease-in;
  scale: 1.1;
  
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

