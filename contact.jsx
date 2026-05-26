// Import React hooks and navigation hook
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {

  // Hook used to redirect users to another page
  const navigate = useNavigate();

  // Store form field values in state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  // Update state whenever a form field changes
  function handleChange(e) {
    setFormData({
      ...formData, // Keep existing values
      [e.target.name]: e.target.value, // Update changed field
    });
  }

  // Run when the form is submitted
  function handleSubmit(e) {
    e.preventDefault(); // Prevent page refresh

    // Display submitted data in browser console
    console.log("Form submitted:", formData);

    // Redirect user to Home page
    navigate("/");
  }

  return (
    <div className="contact-container">

      {/* Contact Information Section */}
      <div className="contact-panel">
        <h2>Contact Information</h2>

        {/* Personal email address */}
        <p>
          <strong>Email:</strong> pietingpikapie@gmail.com
        </p>

        {/* Personal phone number */}
        <p>
          <strong>Phone:</strong> 416-519-7874
        </p>
      </div>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>

        <h2>Send Me a Message</h2>

        {/* First Name Input */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        {/* Last Name Input */}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        {/* Phone Number Input */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />

        {/* Email Address Input */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Message Text Area */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        {/* Submit Button */}
        <button type="submit">
          Send Message
        </button>

      </form>

    </div>
  );
}