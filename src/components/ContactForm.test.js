import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./ContactForm";
import "mutationobserver-shim";

// test("first name last name email and message labels are rendered", () => {
//  const { getByLabelText } = render(<ContactForm />);
// getByLabelText(/firstName/i);
// getByLabelText(/lastName/i);
//  getByLabelText(/email/i);
//  getByLabelText(/message/i);
// });

test("renders labels above form", () => {
  const { getByText } = render(<ContactForm />);
  const fNameText = getByText(/first name/i);
  expect(fNameText).toBeInTheDocument();
});

// test("form submit outputs items", () => {
//   const { getByLabelText, getByText, getByTestId } = render(<ContactForm />);
//   // querying for all the input nodes
//   const firstNameInput = getByLabelText(/firstName/i);
//   const lastNameInput = getByLabelText(/lastName/i);
//   const emailInput = getByLabelText(/email/i);
//   const messageInput = getByLabelText(/message/i);

//   fireEvent.change(firstNameInput, { target: { value: "FName" } });
//   fireEvent.change(lastNameInput, { target: { value: "LastName" } });
//   fireEvent.change(emailInput, { target: { value: "abrgroup@gmail.com" } });
//   fireEvent.change(messageInput, { target: { value: "Test message" } });

//   expect(firstNameInput.value).toBe("FName");
//   expect(lastNameInput.value).toBe("LastName");
//   expect(emailInput.value).toBe("abrgroup@gmail.com");
//   expect(messageInput.value).toBe("Test message");

//   // click on button
//   fireEvent.click(getByText(/submit!/i));
// });
