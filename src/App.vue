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
      <div class="flex gap-3 mb-10">
        <ZenButton @handle-click="onClick" color="tertiary" label="Enviar" to="/" />
        <ZenButton @handle-click="onClick" color="tertiary" label="Enviar" to="/" outlined />
        <ZenButton @handle-click="onClick" color="tertiary" label="Enviar" to="/" text />
        <ZenButton @handle-click="onClick" color="tertiary" label="Enviar" to="/" elevated />
        <ZenButton @handle-click="onClick" color="tertiary" label="Enviar" to="/" disabled />
      </div>
      <div class="flex gap-3 mb-10">
        <ZenButton @handle-click="onClick" color="success" label="Enviar" to="/" />
        <ZenButton @handle-click="onClick" color="success" label="Enviar" to="/" outlined />
        <ZenButton @handle-click="onClick" color="success" label="Enviar" to="/" text />
        <ZenButton @handle-click="onClick" color="success" label="Enviar" to="/" elevated />
        <ZenButton @handle-click="onClick" color="success" label="Enviar" to="/" disabled />
      </div>
      <div class="flex gap-3 mb-10">
        <ZenButton @handle-click="onClick" color="danger" label="Enviar" to="/" />
        <ZenButton @handle-click="onClick" color="danger" label="Enviar" to="/" outlined />
        <ZenButton @handle-click="onClick" color="danger" label="Enviar" to="/" text />
        <ZenButton @handle-click="onClick" color="danger" label="Enviar" to="/" elevated />
        <ZenButton @handle-click="onClick" color="danger" label="Enviar" to="/" disabled />
      </div>
      <div class="flex gap-3 mb-10">
        <ZenButton @handle-click="onClick" color="info" label="Enviar" to="/" />
        <ZenButton @handle-click="onClick" color="info" label="Enviar" to="/" outlined />
        <ZenButton @handle-click="onClick" color="info" label="Enviar" to="/" text />
        <ZenButton @handle-click="onClick" color="info" label="Enviar" to="/" elevated />
        <ZenButton @handle-click="onClick" color="info" label="Enviar" to="/" disabled />
      </div>
      <div class="flex gap-3 mb-10">
        <ZenButton @handle-click="onClick" color="warning" label="Enviar" to="/" />
        <ZenButton @handle-click="onClick" color="warning" label="Enviar" to="/" outlined />
        <ZenButton @handle-click="onClick" color="warning" label="Enviar" to="/" text />
        <ZenButton @handle-click="onClick" color="warning" label="Enviar" to="/" elevated />
        <ZenButton @handle-click="onClick" color="warning" label="Enviar" to="/" disabled />
      </div>
      <div class="flex gap-3 mb-10">
        <ZenButton @handle-click="onClick" color="dark" label="Enviar" to="/" />
        <ZenButton @handle-click="onClick" color="dark" label="Enviar" to="/" outlined />
        <ZenButton @handle-click="onClick" color="dark" label="Enviar" to="/" text />
        <ZenButton @handle-click="onClick" color="dark" label="Enviar" to="/" elevated />
        <ZenButton @handle-click="onClick" color="dark" label="Enviar" to="/" disabled />
      </div>
      <div class="flex gap-3 mb-10">
        <ZenButton @handle-click="onClick" color="light" label="Enviar" to="/" />
        <ZenButton @handle-click="onClick" color="light" label="Enviar" to="/" outlined />
        <ZenButton @handle-click="onClick" color="light" label="Enviar" to="/" text />
        <ZenButton @handle-click="onClick" color="light" label="Enviar" to="/" elevated />
        <ZenButton @handle-click="onClick" color="light" label="Enviar" to="/" disabled />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ZenButton from './components/ZenButton/ZenButton.vue';

const onClick = () => console.log('Click todo ok');
</script>
