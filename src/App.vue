<template>
  <div class="w-screen h-screen dark:bg-neutral-800">
    <div class="container mx-auto py-6">
      <div class="flex gap-3 mb-10">
        <ZenButton @handle-click="onClick" label="Enviar" to="/" />
        <ZenButton @handle-click="onClick" label="Enviar" to="/" outlined />
        <ZenButton @handle-click="onClick" label="Enviar" to="/" text />
        <ZenButton @handle-click="onClick" label="Enviar" to="/" elevated />
        <ZenButton @handle-click="onClick" label="Enviar" to="/" disabled />
      </div>
      <div class="flex gap-3 mb-10">
        <ZenButton @handle-click="onClick" color="secondary" label="Enviar" to="/" />
        <ZenButton @handle-click="onClick" color="secondary" label="Enviar" to="/" outlined />
        <ZenButton @handle-click="onClick" color="secondary" label="Enviar" to="/" text />
        <ZenButton @handle-click="onClick" color="secondary" label="Enviar" to="/" elevated />
        <ZenButton @handle-click="onClick" color="secondary" label="Enviar" to="/" disabled />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ZenButton from './components/ZenButton/ZenButton.vue';

const onClick = () => console.log('Click todo ok');
</script>
