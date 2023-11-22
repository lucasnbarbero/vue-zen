import { DefineComponent } from 'vue';

export const ZenButton: DefineComponent<
  {
    label?: string;
    color?: string;
    target?: string;
    to?: string | object;
    type?: string;
    href?: string;
    as?: string;
    roundedFull?: boolean;
    disabled?: boolean;
    filled?: boolean;
    outlined?: boolean;
    text?: boolean;
    elevated?: boolean;
  },
  {
    handleClick: () => void;
  },
  {}
>;
