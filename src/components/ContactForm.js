import React, { useState } from "react";
// import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  // const { register, errors, handleSubmit, reset } = useForm({
  //   mode: "onBlur"
  // });
  const onSubmit = (e, data) => {
    e.preventDefault();
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstName">First</label>
          <input
            data-testid="testfname"
            name="firstName"
            placeholder="bill"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input name="lastName" placeholder="luo" />
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" required />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
