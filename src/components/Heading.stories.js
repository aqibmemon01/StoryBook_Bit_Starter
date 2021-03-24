import React from 'react';
import {Heading} from './Heading'


export default {
  title: 'Heading',
  component: Heading
}

const Template = (args) => <Heading {...args} />;

export const Heading01 = Template.bind({});
Heading01.args = {
  subTitle: "Class Component",
};
export const Heading02 = Template.bind({});
Heading02.args = {
  subTitle: "Functional Component",
};
export const Heading03 = Template.bind({});
Heading03.args = {
  subTitle: "Checking Component",
};

