import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import "mutationobserver-shim";
import { act } from "react-dom/test-utils";

// test("first name last name email and message labels are rendered", () => {
//const { getByLabelText } = render(<ContactForm />);
//   const messageContains = getByLabelText("Message");
//   expect(messageContains).toBeInTheDocument();
// getByLabelText(/first/i);
// getByLabelText(/lastname/i);
//   getByLabelText(/email/i);
//   getByLabelText(/message/i);
// });

test("renders labels above form for first name", () => {
  const { getByText } = render(<ContactForm />);
  const fNameText = getByText(/first/i);
  expect(fNameText).toBeInTheDocument();
});

// test("renders labels above form for last name", () => {
//   const { getByText } = render(<ContactForm />);
//   const lNameText = getByText(/last/i);
//   expect(lNameText).toBeInTheDocument();
// });

test("renders labels above form for email", () => {
  const { getByText } = render(<ContactForm />);
  const emailText = getByText(/email/i);
  expect(emailText).toBeInTheDocument();
});

test("tests for presence of placeholder text in email", () => {
  const { getByPlaceholderText } = render(<ContactForm />);
  const placeholderEmail = getByPlaceholderText("bluebill1049@hotmail.com");
  expect(placeholderEmail).toBeInTheDocument();
});

test("form submit outputs items", () => {
  const { getByText, getByTestId, getByLabelText } = render(<ContactForm />);
  //   // querying for all the input nodes
  // const firstNameInput = getByLabelText(/first/i);
  const firstNameInput = getByTestId("testfname");
  expect(firstNameInput).toBeTruthy();

  fireEvent.change(firstNameInput, { target: { value: "Blair" } });
  const lastNameInput = getByLabelText(/lastName/i);
  //   const emailInput = getByLabelText(/email/i);
  // const messageInput = getByLabelText(/message/i);

  // fireEvent.change(firstNameInput, { target: { value: "FName" } });
  fireEvent.change(lastNameInput, { target: { value: "lastName" } });
  //   fireEvent.change(emailInput, { target: { value: "abrgroup@gmail.com" } });
  // fireEvent.change(messageInput, { target: { value: "Test message" } });

  expect(firstNameInput.value).toBe("Blair");
  expect(lastNameInput.value).toBe("lastName");
  //   expect(emailInput.value).toBe("abrgroup@gmail.com");
  // expect(messageInput.value).toBe("Test message");

  //   // click on button
  fireEvent.click(getByText("submit"));
  // })
});

// test("first name last name email and message labels are rendered", () => {
//   const { getByLabelText } = render(<ContactForm />);
//   const messageContains = getByLabelText("email", {
//     options: { selector: "input" }
//   });
//   expect(messageContains).toBeInTheDocument();
// });
