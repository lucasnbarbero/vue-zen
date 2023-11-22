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
  const base: string[] = [
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
    base.push(bgColor[buttonStyle.value][props.color]);
    base.push(borderColor[buttonStyle.value][props.color]);
    base.push(textColor[buttonStyle.value][props.color]);
    base.push(hoverColor[buttonStyle.value][props.color]);
    base.push(focusColor[buttonStyle.value][props.color]);
  }

  return base;
});

const bgColor: Record<string, Record<string, string>> = {
  filled: {
    primary: 'bg-primary-400',
    secondary: 'bg-secondary-400',
  },
  outlined: {
    primary: 'bg-transparent',
    secondary: 'bg-transparent',
  },
  text: {
    primary: 'bg-transparent',
    secondary: 'bg-transparent',
  },
  elevated: {
    primary: 'bg-transparent shadow-lg',
    secondary: 'bg-transparent shadow-lg',
  },
};

const borderColor: Record<string, Record<string, string>> = {
  filled: {
    primary: '',
    secondary: '',
  },
  outlined: {
    primary: 'border border-2 border-primary-300',
    secondary: 'border border-2 border-secondary-300',
  },
  text: {
    primary: '',
    secondary: '',
  },
  elevated: {
    primary: '',
    secondary: '',
  },
};

const textColor: Record<string, Record<string, string>> = {
  filled: {
    primary: 'text-white',
    secondary: 'text-white',
  },
  outlined: {
    primary: 'text-primary-400',
    secondary: 'text-secondary-400',
  },
  text: {
    primary: 'text-primary-400',
    secondary: 'text-secondary-400',
  },
  elevated: {
    primary: 'text-primary-400',
    secondary: 'text-secondary-400',
  },
};

const hoverColor: Record<string, Record<string, string>> = {
  filled: {
    primary: 'hover:bg-primary-400/80',
    secondary: 'hover:bg-secondary-400/80',
  },
  outlined: {
    primary: 'hover:bg-primary-50',
    secondary: 'hover:bg-secondary-50',
  },
  text: {
    primary: 'hover:bg-primary-50',
    secondary: 'hover:bg-secondary-50',
  },
  elevated: {
    primary: 'hover:bg-primary-50',
    secondary: 'hover:bg-secondary-50',
  },
};

const focusColor: Record<string, Record<string, string>> = {
  filled: {
    primary: '',
    secondary: '',
  },
  outlined: {
    primary: '',
    secondary: '',
  },
  text: {
    primary: '',
    secondary: '',
  },
  elevated: {
    primary: '',
    secondary: '',
  },
};

const handleClick = () => emits('handleClick');
</script>
