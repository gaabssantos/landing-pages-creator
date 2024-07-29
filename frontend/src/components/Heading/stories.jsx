import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Tema escuro',
    light: false,
  },
  argTypes: {
    children: { type: 'string' },
  },
  backgrounds: {
    default: 'dark',
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} light={true} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'Tema claro',
  light: true,
};
