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
        <h2>Contact</h2>
        <p>Please send me a message and I'll get back to you</p>
        <form>
          <ion-list>
            <ion-item>
              <ion-label>Name: </ion-label> 
              <ion-input name="name" color="dark" placeholder="Enter your name..." v-model="name"></ion-input>
            </ion-item>
            
            <ion-item>
              <ion-label>Email: </ion-label>
              <ion-input name="email" color="dark" placeholder="Enter your email..." v-model="email"></ion-input>    
            </ion-item>

            <ion-item>
              <ion-textarea name="message" color="dark" placeholder="Write your message here..." v-model="message"></ion-textarea>
            </ion-item>

        </ion-list>
        
        <ion-button @click="submitForm" type="submit" expand="block" size="large" color="light">Submit</ion-button>
        
        </form>
      </div>

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar, IonLabel, IonInput, IonTextarea, IonItem, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';
import useValidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

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
  },
  data() {
    return {
      v$: useValidate(), 
      name: '',
      email: '',
      message: '',
    }
  },
  validations() {
    return {
      name: { required },
      email: { required },
    }
  },
  methods: {
    submitForm() {
      this.v$.$validate()
      if (!this.v$.$error) {
        alert('Form sucessfully submitted. Thank you for your interest.')
      }
      else {
        alert('Error! Please fill in all the required fields and click submit again.')
      }    
    }
  },
  
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