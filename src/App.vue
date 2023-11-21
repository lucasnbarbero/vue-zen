<template>
  <div class="container mx-auto py-6">
    <ZenButton @handle-click="onClick" label="Mi primer botón" to="/" />
  </div>
</template>

<script lang="ts" setup>
import ZenButton from './components/ZenButton/ZenButton.vue';

const onClick = () => console.log('Click todo ok');
</script>
