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
    

  </ion-page>

        
        <canvas id="unity-canvas" style="display: block; position: absolute; width: 100%; height: 100%; background: #000000">
        </canvas>
        
        <!-- <Unity>
        </Unity> -->
</template>

<!-- <script lang="ts"> -->
<!-- import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
import Unity from '../components/Unity.vue';

export default defineComponent({
  name: 'Experience',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    Unity
  }
}); -->
<script setup>
import { onMounted } from 'vue';

const sendMessage = (object, method, param) => {
  window.gameInstance.SendMessage(object, method, param);
};

onMounted(() => {

  const file = 'Experience2';
  const script = document.createElement('script');
  script.onload = () => {
    /*global createUnityInstance, a*/
    createUnityInstance(document.querySelector('#unity-canvas'), {
      dataUrl: `Build/Experience2.data.br`,
      frameworkUrl: `Build/Experience2.framework.js.br`,
      codeUrl: `Build/Experience2.wasm.br`,
      streamingAssetsUrl: 'StreamingAssets',
      companyName: 'Leonids',
      productName: "Experience",
      productVersion: '0.2',
      // matchWebGLToCanvasSize: false,
      // Uncomment above to separately control WebGL canvas render size and DOM element size.
      // devicePixelRatio: 1,
      // Uncomment above to override low DPI rendering on high DPI displays.
    }).then((unityInstance) => {
      // setting this allows the usage of "window.gameInstance" in jslib plugins inside Unity
      // it also sets up a simple shortcut we can use to provide a path into Unity from vue
      window.gameInstance = unityInstance;
    });
  };
  script.async = true;

  script.src = `Build/Experience2.loader.js`;

  document.head.appendChild(script);
});

</script>

<style scoped>
/*#container {
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
}*/
</style>