import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";
import userEvent from "@testing-library/user-event";
import Typography from '@mui/material/Typography/Typography';

describe("Header component", () => {

  test("checking if master header is rendered", () => {
    let documentBody = render(<Header />);
    expect(documentBody.getByTestId('headerText')).toBeInTheDocument();
    //expect(hElement).toBeInTheDocument();
  });

});