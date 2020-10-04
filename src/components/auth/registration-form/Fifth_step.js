import React, { useState }  from "react";
import { Input, Row, Col } from "reactstrap";
import { Formik, Form, Field /*, FastField as Field */ } from "formik";
import * as Yup from "yup";
import { Select } from "../../common/FormElement";
const validationSchema = Yup.object().shape({
  password: Yup.string().required("Enter password")
});
const FormSecondStep = (formikProps) => {
  const { formData, setFormData, setStep, step } = formikProps;
  const [direction, setDirection] = useState('next')
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={formData}
      onSubmit={async (values, actions) => {
        console.log('registration data--', values)
        setFormData(values)
        direction === 'next' ? setStep(step + 1) : setStep(step - 1)
      }}>
      {props => {
        const {
        setFieldValue,
        errors,
        touched,
        handleBlur,
        handleChange,
        values} =props;
        return (
          <Form>
            <Row className="form-container">
              <Col xs="12" className="d-flex-column mb-3">
                 <div className="d-flex">
                   <h5 className="flex text-blue subtitle">Just on the show</h5>
                   <hr className="custom-hr"/>
                  </div>
              </Col>
              <Col xs="12">
                <label>Name</label>
              </Col>
              <Col xs="12" style={{ marginBottom: 10 }}>
                <Input tag={Field} name="user_name" type="text" component="input" />
              </Col>
              <Col xs="12">
                <label>Email</label>
              </Col>
              <Col xs="12" style={{ marginBottom: 10 }}>
                <Input tag={Field} name="email" type="text" component="input" />
              </Col>
              <Col xs="12">
                <label>Password</label>
              </Col>
              <Col xs="12" style={{ marginBottom: 10 }}>
                <Input tag={Field} name="password" type="password" component="input" />
                <small style={{ color: "red", fontSize: 12}}> {touched.password && errors.password ? errors.password : ""}</small>
              </Col>
            </Row>
            <Row>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginTop:20 }}>
                <button className="btn btn-outline-warning rounded-20" onClick={(e) => { setStep(step - 1); }}>Previous</button>
                <button className="btn btn-primary rounded-20" type="submit" onClick={(e) => { setDirection('next') }}>Complete it!</button>
              </div>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormSecondStep;
