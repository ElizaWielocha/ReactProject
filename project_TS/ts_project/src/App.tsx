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
import Grid from "@mui/material/Grid";

// Models
import { Product } from './models/Product';
import { ProductsList } from './models/ProductsList';




const App: React.FC = () => {
  // UseStates 
  const [brand, setBrand] = useState(''); // potrzebuje inputu z brand
  const [productType, setProductType] =  useState(''); // potrzebuje inputu z productType
  const [productTypeList, setProductTypeList] = useState<Product[]>([]); // potrzebuje listy produktów dla danej marki
  const [isFetchingProduct, setIsFetchingProduct] = useState(true); // sprawdzenie czy ładuje się czy nie

  // pobieranie danych z API
  useEffect(()=>{
    if(brand){
      axios.get<Product[]>(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`)
      .then(response => {
        console.log(response.data);
        setProductTypeList(response.data);
        setIsFetchingProduct(false);
      });
    }
  }, [brand]);




  return <div className="App">
    <BrowserRouter>
      <Header />
        <Routes>
          
          <Route 
            path="/" // url, przy którym mają się wyświetlić elementy w element = komponent Form
            element={ 
                <Grid container spacing={2}>
                  <FormBrand setBrand={setBrand} setProductType={setProductType} /> 
                  {!isFetchingProduct && (
                    <Grid item xs={12}>
                     <TableCProduct productType={productType} products={productTypeList}/>
                    </Grid>
                  )}
                </Grid>
            }
          />

          <Route
              path="/About"
              element={
                <Grid item xs={12}>
                  <AboutSite />
                </Grid>
              }
          />


        </Routes>

        <Grid item xs={12}>
            <Footer />
        </Grid>
        <Grid item xs={12}>
        </Grid>

    </BrowserRouter>
  </div>


}

export default App;
