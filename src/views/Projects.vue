<template>
  <ion-page>

      <ion-header>
        <ion-toolbar style="--background: transparent">

          <ion-button fill="clear" background="transparent" slot='start'>
            <ion-menu-button color="dark"></ion-menu-button>
          </ion-button>
          
        </ion-toolbar>
      </ion-header>

    <div id="container">
      <ion-grid>
        <ion-row>
          <ion-col>
            <img src="../assets/images/landscape.png">
          </ion-col>
          <ion-col>
            <img src="../assets/images/landscape.png">
          </ion-col>
          <ion-col>
            <img src="../assets/images/landscape.png">
          </ion-col>
          <ion-col>
            <img src="../assets/images/landscape.png">
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>

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
  name: "Projects",
  components: { IonHeader, IonPage, IonToolbar, IonCol, IonGrid, IonRow }
});
</script>

