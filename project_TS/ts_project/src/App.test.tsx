import React from 'react';
import { render, screen } from "@testing-library/react";
import App from "./App";
import axios, { AxiosResponse } from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("App component", () => {

    test('checking if data is loaded', () => {
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
    })


})