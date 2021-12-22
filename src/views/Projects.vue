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
            <div class="triggerss">
              <a class="triggerss" target="_blank" rel="noopener noreferrer" href="https://simplistic.fun"></a>
            </div> 
          </ion-col>
          <ion-col size="12" size-sm>
            <div class="triggerx2">
              <a class="triggerx2" target="_blank" rel="noopener noreferrer" href="http://x2international.com"></a>
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

.triggerss { 
  
  width: auto;
  height: auto;
  min-height: 200px;
  min-width: 340px;
  background: url('../assets/images/ss.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;
    

  
}
.triggerss:hover { 
  
  width: auto;
  height: auto;
  min-height: 200px;
  min-width: 340px;
  background: url('../assets/images/sstext.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;

  
}

.triggerx2 { 
  
  width: auto;
  height: auto;
  min-height: 200px;
  min-width: 340px;
  background: url('../assets/images/x2.png') no-repeat;
  background-size: 100% 100%;
  display: inline-block;

  
}
.triggerx2:hover { 
  
  width: auto;
  height: auto;
  min-height: 200px;
  min-width: 340px;
  background: url('../assets/images/x2text.png') no-repeat;
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
  name: "Projects",
  components: { 
    IonHeader, 
    IonPage, 
    IonToolbar, 
    IonContent
  }
});

      
</script>

