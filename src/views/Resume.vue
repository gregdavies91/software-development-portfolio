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
            <div id="image" class="trigger1">
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
#image {
  margin: 50px;
}

@media (max-width:  1025px) {
  #image {
    margin: 25px;
  }
}

@media (max-width:  800px) {
  #image {
    margin: 0px;
  }
}  

#container {
    padding-left: 300px;
    padding-right: 300px;

}

@media (max-width: 1275px) {
  #container {
  
  padding-left: 300px;
  padding-right: 300px;

  left: 0;
  right: 0;
  top: 350px;

  }
 

  ion-grid {

  position: unset;
  
  }
}


@media (max-width: 675px) {
  #container {
  
  padding-left: 100px;
  padding-right: 100px;
  
  left: 0;
  right: 0;
  top: 350px;
  }
 

  ion-grid {

  position: unset;
  
  }
}
.trigger { 
  
  height: 400px;
  width: 275px;
  display: inline-block;
  transition: scale 0.3s ease-out;
  scale: 1;
  
}
.trigger:hover { 
  
  
  height: 400px;
  width: 275px;
  display: inline-block;
  transition: scale 0.3s ease-in;
  scale: 1.1;
  
}

.trigger1 { 
  
  height: 400px;
  width: 275px;
  background: url('../assets/images/page1sprite.png') no-repeat 0px 0px;
  display: inline-block;
  transition: scale 0.3s ease-out;
  scale: 1;  

  
}
.trigger1:hover { 
  
  height: 400px;
  width: 275px;
  background: url('../assets/images/page1sprite.png') no-repeat 0px -400px;
  display: inline-block;
  transition: scale 0.3s ease-in;
  scale: 1.1;
  
}
</style>