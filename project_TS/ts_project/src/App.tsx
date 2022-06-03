// Imports
import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import axios from 'axios';

// Components
import Header from './components/Header/Header';
import FormBrand from './components/FormBrand/FormBrand';
import TableCProduct from './components/TableCProduct/TableCProduct';
import AboutSite from './components/AboutSite/AboutSite';
import Footer from './components/Footer/Footer';

// Material UI
import { Grid } from "@mui/material/";

// Models
import { Product } from './models/Product';



const App: React.FC = () => {
  // UseStates 
  const [brand, setBrand] = useState(''); 
  const [productType, setProductType] =  useState(''); 
  const [priceValue, setPriceValue] = useState('');
  const [priceFilter , setPriceFilter] = useState('');
  const [productTypeList, setProductTypeList] = useState<Product[]>([]); 
  const [isFetchingProduct, setIsFetchingProduct] = useState(true);
  const check: boolean = true;


  // API data
  useEffect(()=>{
    let filter: string = '';
    let getData: string = '';

    if(priceFilter) {
      if (priceFilter === 'priceGreater') filter = 'price_greater_than';
      else if (priceFilter === 'priceLess') filter = 'price_less_than';
    }

    if(brand && productType && priceValue) { getData = `brand=${brand}&product_type=${productType}&${filter}=${priceValue}`; }
    if(brand && productType && !priceValue) { getData = `brand=${brand}&product_type=${productType}`; }
    if(brand && !productType && priceValue) { getData = `brand=${brand}&${filter}=${priceValue}`; }
    if(!brand && productType && priceValue) { getData = `product_type=${productType}&${filter}=${priceValue}`; }
    if(brand && !productType && !priceValue) { getData =`brand=${brand}`; }
    if(!brand && productType && !priceValue) { getData = `product_type=${productType}`; }
    if(!brand && !productType && priceValue) { getData = `${filter}=${priceValue}`; }

    if(getData) {
      axios.get<Product[]>(`http://makeup-api.herokuapp.com/api/v1/products.json?${getData}`)
        .then(response => {
          console.log(response.data);
          setProductTypeList(response.data);
          setIsFetchingProduct(false);
        });
    }

  }, [brand || productType || priceValue || priceFilter]);


  return <div className="App">
    <BrowserRouter>
      <Grid container spacing={12}>
        <Grid item xs={12}>
          <Header />
        </Grid>
      
      <Routes>
          
        <Route 
          path="/" 
          element={ 
            <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormBrand setBrand={setBrand} setProductType={setProductType} setPriceValue={setPriceValue} setPriceFilter={setPriceFilter}/> 
                  </Grid>

                  {!isFetchingProduct && (
                    <Grid item xs={12}>
                      <TableCProduct productType={productType} products={productTypeList}/>
                    </Grid>
                  )} 
                </Grid>
            </Grid>
          }
        />

        <Route
          path="/About"
          element={
            <Grid item xs={12}>
              <AboutSite check={check} />
            </Grid>
          }
        />

      </Routes>

      <Grid item xs={12}>
        <Footer />
      </Grid>

      </Grid>
    </BrowserRouter>
  </div>

}

export default App;
