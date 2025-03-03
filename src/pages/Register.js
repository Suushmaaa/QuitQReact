import { useState } from "react";
import { registerUser } from "../api";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert("Registration Successful!");
    } catch (error) {
      alert("Registration Failed");
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="text" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })} required />
      <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
