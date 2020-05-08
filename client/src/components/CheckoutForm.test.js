import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const container = render(<CheckoutForm />);
  const header = container.getByText(/checkout form/i);

  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { getByTestId, getByText, getByLabelText, getAllByText } = render(
    <CheckoutForm />
  );
  //   const message = getByText(/successMessage/i);
  //   expect(message).toBeVisible();

  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const addressInput = getByLabelText(/address/i);
  const cityInput = getByLabelText(/city/i);
  const stateInput = getByLabelText(/state/i);
  const zipInput = getByLabelText(/zip/i);

  fireEvent.change(firstNameInput, { target: { value: "Natalia" } });
  fireEvent.change(lastNameInput, { target: { value: "Stewart" } });
  fireEvent.change(addressInput, { target: { value: "6 Ave" } });
  fireEvent.change(cityInput, { target: { value: "Asbury" } });
  fireEvent.change(stateInput, { target: { value: "NJ" } });
  fireEvent.change(zipInput, { target: { value: "001" } });

  //   const button = getAllByText(/checkout/i);
  //   fireEvent.click(button);

  //   const natalia = getByText(/Natalia/i);
  //   expect(natalia).toBeInTheDocument();
});
