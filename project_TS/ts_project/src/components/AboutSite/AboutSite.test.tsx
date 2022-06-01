import { render, screen } from "@testing-library/react";
import AboutSite from "./AboutSite";
import userEvent from "@testing-library/user-event";
import axios from 'axios';
import Typography from '@mui/material/Typography/Typography';


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('AboutSite component', () => {

    let description: string = 'Welcome to the makeup product finder! You can search for your favorite products by brand, product type or both . You can also choose what price range you want the products to be in. Below you will find two lists: A list of available brands and a list of available product types you can search by.';

    test("checking if description is rendered", () => {
        render(<AboutSite />);
        const typographyElement = screen.getByText(description);
        expect(typographyElement).toBeInTheDocument();
    });


    

    test('checking if table is rendered', async () => {
        const { getByText, getAllByRole } = (render(<AboutSite/>));

        // Provide the data object to be returned
        mockedAxios.get.mockResolvedValue({
          data: [
            {
              brand: "maybelline"
            },
            {
              brand: "Dior"
            }
          ],
        });

        const listItem = await screen.findAllByRole('listitem');
        expect(listItem).not.toHaveLength(0);
    })


})