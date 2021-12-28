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
    
      <div id="container">
        <ion-grid>
        <ion-row>
          <ion-col size="12" size-sm>
            <div class="trigger1">
              <a class="trigger" href="assets/cv.pdf" download="GregDaviesCVNov2021"></a>
            </div> 
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="trigger2">
              <a class="trigger" href="assets/cv.pdf" download="GregDaviesCVNov2021"></a>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
      </div>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Resume',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar
  }
});
</script>

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
  
  min-height: 400px;
  min-width: 275px;
  display: inline-block;
  transition: scale 0.3s ease-out;
  scale: 1;
  
}
.trigger:hover { 
  
  
  min-height: 400px;
  min-width: 275px;
  display: inline-block;
  transition: scale 0.3s ease-in;
  scale: 1.1;
  
}

.trigger1 { 
  
  margin: 50px;
  background: url('../assets/images/page1.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  transition: scale 0.3s ease-out;
  scale: 1;  

  
}
.trigger1:hover { 
  
  margin: 50px;
  background: url('../assets/images/page1download.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  transition: scale 0.3s ease-in;
  scale: 1.1;
  
}

.trigger2 { 
  
  margin: 50px;
  background: url('../assets/images/page2.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  transition: scale 0.3s ease-out;
  scale: 1;  
  
}
.trigger2:hover { 
  
  margin: 50px;
  background: url('../assets/images/page2download.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  transition: scale 0.3s ease-in;
  scale: 1.1;
  
}
</style>