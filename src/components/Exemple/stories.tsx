import { Meta, Story } from '@storybook/react/types-6-0';
import Exemple from '.';

export default {
  title: 'Exemple',
  component: Exemple
} as Meta;

export const Basic: Story = (args) => <Exemple {...args} />;
