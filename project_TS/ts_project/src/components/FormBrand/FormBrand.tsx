import React from "react";
import {useState, useRef} from 'react';
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button/Button";
import Fade from "@mui/material/Fade/Fade";
import Grid from "@mui/material/Grid/Grid";
import TextField from "@mui/material/TextField/TextField";
import { Dispatch, SetStateAction } from "react";

type FormBrandProps = {
    setBrand?: Dispatch<React.SetStateAction<string>>;
    setProduct?: Dispatch<React.SetStateAction<string>>;
};

// klasa funkcyjna 
const FormBrand = (props: FormBrandProps) => {
  const [inputState, setInputState] = useState(false);

  const {register, handleSubmit, formState: {errors}} = useForm();

  const inputRefBrand = useRef<HTMLInputElement>(); // dzięki Ref teraz poprzez zmienną inputRef mam dostęp do inputu z dołu 
  const inputRefProduct = useRef<HTMLInputElement>();


  const inputChangeHandler = () => {
    if ( (inputRefBrand.current?.value !== "") && (inputRefProduct.current?.value !== "") ) {
      setInputState(true);
    }
    else {
      setInputState(false);
    }
  }

  const formHandler = (data: { brand: any; }) =>{
    if ( (inputRefBrand.current?.value !== "") && (inputRefProduct.current?.value !== "") ){
      if (props.setBrand) {
          props.setBrand(data.brand);
        }
      if (props.setProduct && inputRefProduct.current?.value) {
          props.setProduct(inputRefProduct.current?.value);
        }
    }
  };


  return (
    <Fade in={true} timeout={2000}>
      <form onSubmit={handleSubmit(formHandler)} justify-content="center" page-align="center" data-sx="true">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField 
              id="brand"
              type="text" 
              {...register("brand", {required: "required"})}
              inputRef = {inputRefBrand}
              onChange={inputChangeHandler}
              variant="outlined"
              label="brand"
              inputProps={{ style: {textAlign: "center"} }}
            /> 
            <TextField 
              id="product"
              type="text" 
              {...register("product", {required: "required"})}
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
              data-variant ={inputState !== false ? "contained" : "disabled"}>
                Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Fade>
  );
};


export default FormBrand;