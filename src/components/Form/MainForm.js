import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { Form, Col, InputGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const MainFormStyle = styled.div`
    padding: 100px;
`;

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    nipnumber: yup.string().required(),
    email: yup.string().required().email(),
});

export function MainForm() {
    return (
        <MainFormStyle>
            <h3>Healthcare Providers Request</h3>
            <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                    firstName: '',
                    lastName: '',
                }}
            >
                {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isValid,
                      errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} md="4" controlId="validationFirstName">
                                <Form.Label>First Name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="string"
                                        placeholder="First Name"
                                        name="firstName"
                                        value={values.firstname}
                                        onChange={handleChange}
                                        isInvalid={!!errors.firstName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstName}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationNipNumber">
                                <Form.Label>Last Name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="string"
                                        placeholder="Last Name"
                                        name="lastName"
                                        value={values.lastName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.lastName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.lastName}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="validationNipNumber">
                                <Form.Label>NIP Number</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type="number"
                                        placeholder="NIP Number"
                                        name="nipnumber"
                                        value={values.nipnumber}
                                        onChange={handleChange}
                                        isInvalid={!!errors.nipnumber}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.nipnumber}
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                    value={values.city}
                                    onChange={handleChange}
                                    isInvalid={!!errors.city}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.city}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationState">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="State"
                                    name="state"
                                    value={values.state}
                                    onChange={handleChange}
                                    isInvalid={!!errors.state}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.state}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationZipCode">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Zip"
                                    name="zip"
                                    value={values.zip}
                                    onChange={handleChange}
                                    isInvalid={!!errors.zip}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.zip}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} md="6" controlId="validationEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Button style={{ background: 'orange', border: 'orange' }} type="submit">Submit form</Button>
                    </Form>
                )}
            </Formik>
        </MainFormStyle>
    );
}