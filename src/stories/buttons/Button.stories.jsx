import React from 'react';

import { Button } from '../../components/buttons/Button';

export default {
  title: 'Example/Buttons',
  component: Button,
  argTypes: {
    type: {
      name: 'Type',
      control: 'select',
      options: {
        'Primary': 'primary',
        'Secondary': 'secondary'
      }
    },
    label: {
      name: 'Label',
    },
    size: {
      name: 'Size',
      options: {
        'Small': 'small',
        'Medium': 'medium',
        'Large': 'large'
      }
    }
  }
};

const Template = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  label: 'Button label',
  type: 'primary',
  size: 'medium',
};
