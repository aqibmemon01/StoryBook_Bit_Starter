import React from 'react';
import {TextField,Button, Tab} from '@material-ui/core';
import './App.css';
import {TableHead} from './TableHead';
import {Heading} from './Heading';
import {MyButton} from './myButton';


class ClassForm extends React.Component{

constructor(props){
super(props);
this.state={
    Name:"",
    Quantity:"",
    Price:"",
    UpdateMode:false,
    Updateindex:"",
}
this.SaveProduct = this.SaveProduct.bind(this)
this.DeleteMe = this.DeleteMe.bind(this)
this.UpdateValue = this.UpdateValue.bind(this)
this.UpdateModeOn = this.UpdateModeOn.bind(this)
}

ProductArr = []


SaveProduct(){
this.ProductArr.push({
    Name:this.state.Name,
    Qty:this.state.Quantity,
    Price:this.state.Price,
})
this.setState({Name:"",Quantity:"",Price:""})
console.log(this.ProductArr)
}
DeleteMe(index){
    console.log(index)
    this.ProductArr.splice(index,1);
    this.setState({Name:this.state.Name})
}

UpdateModeOn( index ){
    this.setState({UpdateMode:true,
                   Updateindex:index,
                   Name:this.ProductArr[index].Name,
                   Quantity:this.ProductArr[index].Qty,
                   Price:this.ProductArr[index].Price,
    })
}

UpdateValue(){

this.ProductArr.splice(this.state.Updateindex,1,{
    Name:this.state.Name,
    Qty:this.state.Quantity,
    Price:this.state.Price
})
this.setState({UpdateMode:false,Updateindex:0,Name:"",Quantity:"",Price:""})
}


render(){
return(
<div>

<div className="ClassForm" >
    <Heading subTitle="Class Component" />
    
    <form noValidate autoComplete="off">
  <TextField id="outlined-basic" label="Product Name" variant="outlined"  
  onChange={(e)=>this.setState({Name:e.target.value})} value={this.state.Name} /> <br />
  <TextField id="outlined-basic" label="Quantity" type="number" variant="outlined"
  onChange={(e)=>this.setState({Quantity:e.target.value})} value={this.state.Quantity} /><br />
  <TextField id="outlined-basic" label="Price" type="number" variant="outlined"
  onChange={(e)=>this.setState({Price:e.target.value})} value={this.state.Price} /><br />
<br />

 <MyButton myVariant="contained" myColor="primary" mySize="large" 
 myLabel={this.state.UpdateMode ? "Update Product" : "Add Product"} 
 clickAction={()=>{
    this.state.UpdateMode ? this.UpdateValue() : this.SaveProduct()}}
 />
 
</form>

<br />


</div>

<div>

<table border="3" >
    <tbody >
    <TableHead one="Name" two="Qty" three="Price" four="Delete" five="Update" />

        {this.ProductArr.map((val,index)=>{
            return(
    <tr key={index} >
        <td>{val.Name}</td>
        <td>{val.Qty}</td>
        <td>{val.Price}</td>
        <td><Button variant="contained" color="secondary" onClick={()=>this.DeleteMe(index)} >Delete</Button></td>
        <td><Button variant="contained" color="primary" onClick={()=>this.UpdateModeOn(index)}>
        {this.state.UpdateMode && index==this.state.Updateindex ? "GoTO Form" : "Update"}</Button></td>
    </tr>
            )
        })}
    
    </tbody>
</table>

</div>






</div>

)



}



}

export default ClassForm;