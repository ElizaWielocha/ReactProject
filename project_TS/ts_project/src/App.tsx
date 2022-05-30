import {useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import FormBrand from './components/FormBrand/FormBrand';
import TableCProduct from './components/TableCProduct/TableCProduct';
import axios from 'axios';
import Grid from "@mui/material/Grid";
import AboutSite from './components/AboutSite/AboutSite';
import Footer from './components/Footer/Footer';

interface Product {
  name: string;
  price: string;
  category: string;
  product_type: string;
}

export type ProductsList = Product[];

function App() {
  const [brand, setBrand] = useState('');
  const [product, setProduct] =  useState('');
  const [productTypeList, setProductTypeList] = useState<Product[]>([]);
  const [isFetchingProduct, setIsFetchingProduct] = useState(true);

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
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Routes>
          <Route 
            path="/" // url, przy którym mają się wyświetlić elementy w element = komponent Form
            element={ 
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormBrand setBrand={setBrand} setProduct={setProduct} />
                  </Grid>  
                  {!isFetchingProduct && (
                    <Grid item xs={12}>
                     <TableCProduct product={product} products={productTypeList}/>
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
      </Grid>
    </BrowserRouter>
  </div>


}

export default App;
