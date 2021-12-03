<template>
  <ion-page>

      <ion-header>
        <ion-toolbar style="--background: transparent">

          <ion-button fill="clear" background="transparent" slot='start'>
            <ion-menu-button color="dark"></ion-menu-button>
          </ion-button>
          
        </ion-toolbar>
      </ion-header>

    
      <ion-grid style="--ion-grid-width-xs:              100%;
--ion-grid-width-sm:              540px;
--ion-grid-width-md:              720px;
--ion-grid-width-lg:              960px;
--ion-grid-width-xl:              1140px; 
--ion-grid-padding:               5px;

--ion-grid-padding-xs:            5px;
--ion-grid-padding-sm:            5px;
--ion-grid-padding-md:            5px;
--ion-grid-padding-lg:            5px;
--ion-grid-padding-xl:            5px;
--ion-grid-column-padding:        5px;

--ion-grid-column-padding-xs:     5px;
--ion-grid-column-padding-sm:     5px;
--ion-grid-column-padding-md:     5px;
--ion-grid-column-padding-lg:     5px;
--ion-grid-column-padding-xl:     5px;">
        <ion-row class="ion-justify-content-start">
          <ion-col size="12" size-sm>
            <img src="../assets/images/landscape.png">
          </ion-col>
          <ion-col size="12" size-sm>
            <img src="../assets/images/landscape.png">
          </ion-col>
          <ion-col size="12" size-sm>
            <img src="../assets/images/landscape.png">
          </ion-col>
          <ion-col size="12" size-sm>
            <img src="../assets/images/landscape.png">
          </ion-col>
        </ion-row>
      </ion-grid>
    

  </ion-page>
      
  
</template>

<style>
  #container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>

<script>

import { IonHeader, IonPage, IonToolbar, IonCol, IonGrid, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Experience",
  components: { IonHeader, IonPage, IonToolbar, IonCol, IonGrid, IonRow }
});
</script>

