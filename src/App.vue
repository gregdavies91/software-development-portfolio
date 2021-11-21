<template>

    <header>
      
    </header>

    <ion-split-pane content-id='main'>
        <Menu></Menu>
    </ion-split-pane>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menu from './components/Menu.vue';


export default defineComponent({
  name: 'App',
  components: {
    Menu
  }
})
</script>