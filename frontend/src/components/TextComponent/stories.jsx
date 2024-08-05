import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, necessitatibus quibusdam aspernatur temporibus consequuntur recusandae autem amet cum. Ipsam quibusdam commodi quos, beatae eius doloremque laboriosam! Quos soluta quaerat magnam.',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
