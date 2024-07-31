import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Tema escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  backgrounds: {
    default: 'light',
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'Tema claro',
  colorDark: false,
};
