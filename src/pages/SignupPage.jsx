import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });


  console.log("formData", formData);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Container>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </Form>
    </Container>
  );
}

export default SignupPage;
