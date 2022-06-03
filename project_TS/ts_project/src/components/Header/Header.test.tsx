import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";


describe("Header component", () => {
  test("checking if master header is rendered", () => {
    let documentBody = render(<Header />);
    expect(documentBody.getByText('Makeup Browser')).toBeInTheDocument();
  });

});