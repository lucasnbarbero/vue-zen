import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import ZenButton from '../ZenButton.vue';

describe('ZenButton', () => {
  it('render zen button', () => {
    const wrapper = mount(ZenButton, { props: { label: 'Mi boton' } });
    expect(wrapper.text()).toContain('Mi boton');
  });
});
