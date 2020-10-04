import React, { useState }  from "react";
import { Row, Col } from "reactstrap";
import { Formik, Form, Field /*, FastField as Field */ } from "formik";
import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  email: Yup.string().required("Enter your email").email('Please Enter valid email address'),
  contact: Yup.string().matches(/^[0-9]{8}$/, 'Enter Valid contact number').required('Enter your contact number'),
});
const FormSecondStep = (formikProps) => {
  const { formData, setFormData, setStep, step, mailSent, verification, setVerification, setMailSent } = formikProps;
  const [direction, setDirection] = useState('next')
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={formData}
      onSubmit={async (values, actions) => {
        setMailSent(true);
        setFormData(values)
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
            {!mailSent && !verification ?(<Row className="form-container">
              <Col xs="12" className="d-flex-column mb-3">
                 <div className="d-flex">
                   <h5 className="flex text-blue subtitle">Information</h5>
                   <hr className="custom-hr"/>
                  </div>
              </Col>
              <Col xs="12">
              <label>Email</label>
              </Col>
              <Col xs="12" style={{ marginBottom: 10 }}>
                <Field name="email" type="text" 
                    className={
                      touched.email && errors.email
                        ? "form-control error"
                        : "form-control"} 
                  />
                <small className="error"> {touched.email && errors.email ? errors.email : ""}</small>
              </Col>
              <Col xs="12">
                <Row>
                <Col md="4" className="p-0"><label>Code</label></Col>
                <Col md="8" className="p-0"><label>Contact</label></Col>
                </Row>

                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon3">US +1</span>
                  </div>
                  <Field name="contact" type="text" 
                    className="form-control" 
                  />
                </div>
                 <small className="error"> {touched.contact && errors.contact ? errors.contact : ""}</small>
              </Col>
            </Row>):''}
            {mailSent?(<Row className="form-container d-flex justify-content-center">
              <div className="d-flex-column text-center">
                <h1 className="mb-2">Done</h1>
                <span className="">Its done</span>
              </div>
              <Row>
                <Col xs="12" className="p-0">
                  <p>Form is completed! <span className="text-primary-orange">Please find you entry soon.</span></p>
                </Col>
              </Row>
              <Row>
                <Col xs="12" className="d-flex flex-column mb-3">
                  <img src="/images/mailsend.jpg" style={{height:'35vh'}} />
                  <span className="text-center">Thank you!</span>
                </Col>
              </Row>
              <Row>
                <Col xs="12" className="d-flex justify-content-center mb-3">
                    <button className="btn btn-primary rounded-20" onClick={(e) => { setMailSent(false);setVerification(true) }}>Continue</button>
                </Col>
              </Row>
            </Row>):''}
            {verification?(<Row className="d-flex flex-column justify-content-center">
              <div className="d-flex-column text-center">
                <h1 className="mb-2">Enter Email Verification</h1>
                <span className="">Please enter verification</span>
              </div>
              <Row>
                <Col xs="12" className="mt-5 mb-5">
                  <Field type="text" className="form-control" value="243243"/>
                </Col>
              </Row>
              <Row>
                <Col xs="12" className="d-flex justify-content-center mb-3">
                    <button className="btn btn-primary rounded-20" onClick={(e) => { setMailSent(false);setVerification(false);setStep(step + 1) }}>Continue</button>
                </Col>
              </Row>
            </Row>):''}
            {!mailSent && !verification ?(<Row>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginTop:20 }}>
                <button className="btn btn-outline-warning rounded-20" onClick={(e) => { setStep(step - 1); }}>Previous</button>
                <button className="btn btn-primary rounded-20" type="submit">Continue</button>
              </div>
            </Row>):''}
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormSecondStep;
