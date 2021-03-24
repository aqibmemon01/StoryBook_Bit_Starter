import React from 'react';
import {MyButton} from './myButton'


export default {
  title: 'My Button',
  component: MyButton
}

const Template = (args) => <MyButton {...args} />;


export const AddButton = Template.bind({});
AddButton.args = {
  myVariant: "contained",
  myColor: "primary",
  mySize: "large",
  myLabel: "Add Product",
  clickAction: ()=>{alert("Product Add Functional Called")},
 
};
export const UpdateButton = Template.bind({});
UpdateButton.args = {
  myVariant: "contained",
  myColor: "primary",
  mySize: "large",
  myLabel: "Update Product",
  clickAction: ()=>{alert("Product Update Functional Called")},
 
};
export const DeleteButton = Template.bind({});
DeleteButton.args = {
  myVariant: "contained",
  myColor: "secondary",
  mySize: "large",
  myLabel: "Delete Product",
  clickAction: ()=>{alert("Product Delete Functional Called")},
 
};

