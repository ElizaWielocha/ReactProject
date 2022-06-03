import { render, screen } from "@testing-library/react";
import AboutSite from "./AboutSite";
import axios, { AxiosResponse } from 'axios';



jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;


describe('AboutSite component', () => {

    test("checking if welcome text is rendered", () => {
      let documentBody = render(<AboutSite />);
      expect(documentBody.getByTestId('welcome')).toBeInTheDocument();
    });

    test("checking if description is rendered", () => {
      let documentBody = render(<AboutSite />);
      expect(documentBody.getByTestId('description')).toBeInTheDocument();
    });

    
    test('checking if tables from AboutSite are rendered', () => {
        const getData = [
          { 
          id:1047,
          brand: "colourpop",
          name: "Blotted Lip",
          price: "5.5",
          api_featured_image:"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/047/original/open-uri20180708-4-e7idod?1531087336",
          category: "lipstick",
          product_type: "lipstick" 
        }] ;
        const res = { data: getData};
        mockedAxios.get.mockResolvedValue(res as any);
    });
  
})