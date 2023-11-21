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

const componentClass = computed((): string[] => {
  const base: string[] = ['px-6', 'py-2.5', 'transition', 'shadow-md', 'font-medium'];

  base.push(props.disabled ? 'cursor-not-allowed' : 'cursor-pointer');
  base.push(props.roundedFull ? 'rounded-full' : 'rounded-md');

  base.push(colors[props.color]);

  return base;
});

const handleClick = () => emits('handleClick');

const colors: Record<string, string> = {
  primary: 'bg-sky-400 hover:bg-sky-500 text-white',
  'primary-light': 'bg-sky-100 hover:bg-sky-200',
};
</script>
