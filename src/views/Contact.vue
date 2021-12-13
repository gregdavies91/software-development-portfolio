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
        <h2>Contact Form</h2>
        <p>Please use the form to send me a quick message and I'll get back to you</p>
        <form>
          <ion-list>
            <ion-item>
              <ion-label>Name: </ion-label> 
              <ion-input color="dark" placeholder="Your Name"></ion-input>

            </ion-item>
            <ion-item>
              <ion-label>Email: </ion-label>
              <ion-input color="dark" placeholder="Your Email"></ion-input>    
            </ion-item>
          
          <ion-textarea color="dark" placeholder="Please type your message here..."></ion-textarea>

        </ion-list>
        
        <ion-button type="submit" expand="block" size="large" color="light">Submit</ion-button>
        
        </form>
      </div>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar, IonLabel, IonInput, IonTextarea, IonItem, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Contact',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonLabel,
    IonInput,
    IonTextarea,
    IonItem,
    IonList 
  }
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  }
});
</script>

<style scoped>
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