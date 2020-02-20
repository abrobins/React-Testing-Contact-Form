import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
import "mutationobserver-shim";

test("first name last name email and message labels are rendered", () => {
  //const { getByLabelText } = render(<ContactForm />);
  //   const messageContains = getByLabelText("Message");
  //   expect(messageContains).toBeInTheDocument();
  // getByLabelText(/first/i);
  // getByLabelText(/lastname/i);
  //   getByLabelText(/email/i);
  //   getByLabelText(/message/i);
});

test("renders labels above form", () => {
  const { getByText } = render(<ContactForm />);
  const fNameText = getByText(/first/i);
  expect(fNameText).toBeInTheDocument();
});

test("form submit outputs items", () => {
  const { getByText, getByTestId } = render(<ContactForm />);
  //   // querying for all the input nodes
  // const firstNameInput = getByLabelText(/first/i);
  const firstNameInput = getByTestId("testfname");
  expect(firstNameInput).toBeTruthy();
  fireEvent.change(firstNameInput, { target: { value: "Blair" } });
  //   const lastNameInput = getByLabelText(/lastName/i);
  //   const emailInput = getByLabelText(/email/i);
  //   const messageInput = getByLabelText(/message/i);

  // fireEvent.change(firstNameInput, { target: { value: "FName" } });
  //   fireEvent.change(lastNameInput, { target: { value: "LastName" } });
  //   fireEvent.change(emailInput, { target: { value: "abrgroup@gmail.com" } });
  //   fireEvent.change(messageInput, { target: { value: "Test message" } });

  expect(firstNameInput.value).toBe("Blair");
  //   expect(lastNameInput.value).toBe("LastName");
  //   expect(emailInput.value).toBe("abrgroup@gmail.com");
  //   expect(messageInput.value).toBe("Test message");

  //   // click on button
  fireEvent.click(getByText("submit"));
  // })
});
