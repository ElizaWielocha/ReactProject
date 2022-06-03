import React from "react";
import {useState, useRef} from 'react';
import { useForm } from "react-hook-form";
import { Dispatch } from "react";

import { Product } from '../../models/Product'; 

import { Button, TextField, Grid, Typography, Select, SelectChangeEvent, FormControl, InputLabel, MenuItem }  from "@mui/material/";

// otypowanie setBrand i setProduct
type FormBrandProps = {
    setBrand?: Dispatch<React.SetStateAction<string>>;
    setProductType?: Dispatch<React.SetStateAction<string>>;
    setPriceValue?: Dispatch<React.SetStateAction<string>>;
    setPriceFilter?: Dispatch<React.SetStateAction<string>>;
};


const FormBrand = (props: FormBrandProps) => {
  const [inputState, setInputState] = useState(false); 
  let value: string = '';

  const urlPicture: string = 'https://img.freepik.com/free-photo/day-makeup-set-beauty-products-natural-makeup-white-background-with-copy-space_541595-794.jpg?w=2000';

  const {register, handleSubmit, formState: {errors}} = useForm<Product>();

  const inputRefBrand = useRef<HTMLInputElement>();  
  const inputRefProduct = useRef<HTMLInputElement>();
  const inputRefPrice = useRef<HTMLInputElement>();


  const inputChangeHandler = () => {
    if (inputRefBrand.current?.value !== "" || inputRefProduct.current?.value !== "" || inputRefPrice.current?.value !== '') {
      setInputState(true);
    }
    else {
      setInputState(false);
    }
  }

  const handleChange = (event: SelectChangeEvent) => {
    if(props.setPriceFilter) {
    props.setPriceFilter(event.target.value as string);
    value = event.target.value as string;
    }
  };
  
  const formHandler = (data: Product ) =>{
    if ( inputState === true ){
      if (props.setBrand){ 
          props.setBrand(data.brand);
      }
      if (props.setProductType && inputRefProduct.current?.value) {
        props.setProductType(inputRefProduct.current?.value);
      }
      if (props.setPriceValue && inputRefPrice.current?.value){
        props.setPriceValue(inputRefPrice.current?.value);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(formHandler)}>
      <Grid container spacing={0} >
        <Grid item xs={6}>
          <Grid container spacing={0} justifyContent="center" alignItems="center" direction="column">

            <Grid item xs={12} sx={{ mb: 2}}  >
              <Typography sx={{ fontFamily: "sans-serif" }}>
                <b>Search, what you whant:</b>
              </Typography>
            </Grid>

            <Grid item xs={12} sx={{ mb: 2}} >
              <TextField sx={{ color: "#3D0E11", bgcolor: "#FBF3F5" }}
                id="brand"
                type="text" 
                {...register("brand", {})}
                inputRef = {inputRefBrand}
                onChange={inputChangeHandler}
                variant="standard"
                placeholder="brand"
                inputProps={{ style: {textAlign: "center"} }}
              /> 
            </Grid>

            <Grid item xs={12} sx={{ mb: 2, bgcolor: "#FBF3F5" }}>
              <TextField sx={{ color: "#3D0E11", bgcolor: "#FBF3F5" }}
                id="productType"
                type="text" 
                {...register("product_type", {})}
                inputRef = {inputRefProduct}
                onChange={inputChangeHandler}
                variant="standard"
                placeholder="product"
                inputProps={{ style: {textAlign: "center"} }}
              /> 
            </Grid>

            <Grid item xs={12} sx={{ mb: 2, ml: -26 }}>
              <FormControl sx={{ width: 200 }}>
                <InputLabel sx={{height:34, mt: -1.25}} id="priceFilterOption">select filtering option</InputLabel>
                <Select sx={{ height:34 }} id='priceFilterOption' label="select filtering option" value={value} onChange={handleChange}>
                  <MenuItem value="priceGreater">price greater than</MenuItem>
                  <MenuItem value="priceLess">price less than</MenuItem>
                </Select>
              </FormControl>

              <TextField sx={{ ml: 1, bgcolor: "#FBF3F5"}}
                id="priceValue"
                type="text" 
                {...register("price", {})}
                inputRef = {inputRefPrice}
                onChange={inputChangeHandler}
                variant="standard"
                placeholder="value"
                inputProps={{ style: {textAlign: "center"} }}
              /> 
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained" type="submit" sx={{ color: '#C8ACB3', bgcolor: "#2D1017", fontFamily: "sans-serif" , mb: 5}}> 
                  <b>Search</b>
              </Button>
            </Grid>
          </Grid>

        </Grid>

        <Grid item xs={6} sx={{ mt: -5, mb: -13} }>
          <Grid container spacing={0} justifyContent="right" alignItems="right">
            <img alt="logo" style={{width: 800}} src={urlPicture}/>
          </Grid>
        </Grid>
        
      </Grid>
    </form>
  );
};



export default FormBrand;