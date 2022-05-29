import React from "react";
import {useState, useRef} from 'react';
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button/Button";
import Fade from "@mui/material/Fade/Fade";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";

// klasa funkcyjna 
function Form(props) {
  const [inputState, setInputState] = useState(false);

  const {register, handleSubmit, formState: {errors}} = useForm();

  const inputRefBrand = useRef(); // dzięki Ref teraz poprzez zmienną inputRef mam dostęp do inputu z dołu 
  const inputRefProduct = useRef();


  const inputChangeHandler = () => {
    if ( (inputRefBrand.current.value !== "") && (inputRefProduct.current.value !== "") ) {
      setInputState(true);
    }
    else {
      setInputState(false);
    }
  }

  const formHandler = (data) =>{
    if ( (inputRefBrand.current.value !== "") && (inputRefProduct.current.value !== "") ){
      props.setBrand(data.brand);
      props.setProduct(inputRefProduct.current.value);
    }
  };


  return (
    <Fade in={true} timeout={2000}>
      <form onSubmit={handleSubmit(formHandler)} justify-content="center" align="center" sx="true">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField 
              id="brand"
              type="text" 
              {...register("brand", {})}
              inputRef = {inputRefBrand}
              onChange={inputChangeHandler}
              variant="outlined"
              label="brand"
              inputProps={{ style: {textAlign: "center"} }}
            /> 
            <TextField 
              id="product"
              type="text" 
              {...register("product", {})}
              inputRef = {inputRefProduct}
              onChange={inputChangeHandler}
              variant="outlined"
              label="product"
              inputProps={{ style: {textAlign: "center"} }}
            /> 
          </Grid>
          <Grid item xs={12}>
            <Button 
              type="submit" 
              variant ={inputState !== false ? "contained" : "disabled"}>
                Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fade>
  );
};


export default Form;