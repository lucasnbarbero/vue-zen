<!-- ZenButton.vue -->

<template>
  <component
    :is="is"
    :class="componentClass"
    :href="href"
    :type="computedType"
    :to="to"
    :target="target"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="label">{{ label }}</span>
  </component>
</template>

<script lang="ts" setup>
/**
 * @typedef {Object} ZenButtonProps
 * @property {string} [label] - Texto del botón.
 * @property {string} [color] - Color del botón.
 * @property {string} [target] - Atributo target para enlaces.
 * @property {string | object} [to] - Ruta para enlaces de Vue Router.
 * @property {string} [type] - Tipo del botón (si es un botón).
 * @property {string} [href] - URL para enlaces `<a>`.
 * @property {string} [as] - Tipo de elemento si se especifica un componente externo (ej. 'router-link').
 * @property {boolean} [roundedFull] - Indica si el botón debe tener bordes redondeados completos.
 * @property {boolean} [disabled] - Indica si el botón está deshabilitado.
 * @property {boolean} [filled] - Indica si el botón debe estar lleno de color.
 * @property {boolean} [outlined] - Indica si el botón debe tener un estilo de solamente borde.
 * @property {boolean} [text] - Indica si el botón debe tener un estilo de texto.
 * @property {boolean} [elevated] - Indica si el botón debe tener un estilo de elevación.
 */

import getButtonColor from '@/utils/getButtonColor';
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
  label: { type: String, default: null },
  color: { type: String, default: 'primary' },
  target: { type: String, default: null },
  to: { type: [String, Object], default: null },
  type: { type: String, default: null },
  href: { type: String, default: null },
  as: { type: String, default: null },
  roundedFull: Boolean,
  disabled: Boolean,
  filled: Boolean,
  outlined: Boolean,
  text: Boolean,
  elevated: Boolean,
});

const emits = defineEmits(['handleClick']);

const is = computed(() => {
  if (props.as) return props.as;
  if (props.to) return RouterLink;
  if (props.href) return 'a';

  return 'button';
});

const computedType = computed(() => {
  if (is.value === 'button') return props.type ?? 'button';
  return null;
});

const buttonStyle = computed(() => {
  if (props.filled) return 'filled';
  if (props.outlined) return 'outlined';
  if (props.text) return 'text';
  if (props.elevated) return 'elevated';
  return 'filled';
});

const componentClass = computed((): string[] => {
  var base: string[] = [
    'inline-flex',
    'items-center',
    'justify-center',
    'px-6',
    'py-2.5',
    'transition',
    'duration-200',
    'cursor-pointer',
  ];

  base.push(props.roundedFull ? 'rounded-full' : 'rounded-md');

  if (props.disabled) {
    base.push('bg-neutral-200 text-neutral-400');
  } else {
    base = [...base, ...getButtonColor(props.color, buttonStyle.value)];
  }

  return base;
});

const handleClick = () => emits('handleClick');
</script>
