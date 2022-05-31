import React from "react";
import {useState, useRef} from 'react';
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField/TextField";
import { Dispatch } from "react";
import { Product } from '../../models/Product'; 

// otypowanie setBrand i setProduct
type FormBrandProps = {
    setBrand?: Dispatch<React.SetStateAction<string>>;
    setProductType?: Dispatch<React.SetStateAction<string>>;
};


const FormBrand = (props: FormBrandProps) => {
  const [inputState, setInputState] = useState(false); // jak jest input brand na pewno

  const {register, handleSubmit, formState: {errors}} = useForm<Product>();

  // referencje do inputów 
  const inputRefBrand = useRef<HTMLInputElement>();  
  const inputRefProduct = useRef<HTMLInputElement>();

    // sprawdzenie czy inputy nie są puste
  const inputChangeHandler = () => {
    if (inputRefBrand.current?.value !== "" || inputRefProduct.current?.value !== "") {
      setInputState(true);
    }
    else {
      setInputState(false);
    }
  }

  
  const formHandler = (data: Product ) =>{
    if ( inputState === true ){
      if (props.setBrand){ 
          props.setBrand(data.brand);
      }
      if (props.setProductType && inputRefProduct.current?.value) {
        props.setProductType(inputRefProduct.current?.value);
      }
    }
  }


  return (
      <form onSubmit={handleSubmit(formHandler)}>
            <TextField 
              id="brand"
              type="text" 
              {...register("brand", {})}
              inputRef = {inputRefBrand}
              onChange={inputChangeHandler}
              //variant="outlined"
              label="brand"
              inputProps={{ style: {textAlign: "center"} }}
            /> 
            <TextField
              id="productType"
              type="text" 
              {...register("product_type", {})}
              inputRef = {inputRefProduct}
              onChange={inputChangeHandler}
              //variant="outlined"
              label="product type"
              inputProps={{ style: {textAlign: "center"} }}
            /> 
            <Button type="submit" >
                Search
            </Button>
      </form>
  );
};


export default FormBrand;