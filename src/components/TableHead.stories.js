import React from 'react';
import {TableHead} from './TableHead'


export default {
  title: 'Table Head',
  component: TableHead
}

const Template = (args) => <TableHead {...args} />;

export const TableHead01 = Template.bind({});
TableHead01.args = {
  one: "Name",
  two: "Qty",
  three: "Price",
  four: "Delete",
  five: "Update",
};


export const TableHead02 = Template.bind({});
TableHead02.args = {
  one: "Check01",
  two: "Check02",
  three: "Check03",
  four: "Check04",
  five: "Check05",
};



