import React, { useState }  from "react";
import { Input, Row, Col } from "reactstrap";
import { Formik, Form, Field /*, FastField as Field */ } from "formik";
import * as Yup from "yup";
import { Duration } from "./Duration";
const validationSchema = Yup.object().shape({
  acc_name: Yup.string().required("Enter your name"),
  card_holder_name: Yup.number().typeError("Please enter valid number").required("Please enter valid number"),
  exp_date: Yup.number().typeError("Invalid").required("Invalid"),
  cvv: Yup.number().typeError("Invalid").required("Invalid")

});
const FormSecondStep = (formikProps) => {
  const { formData, setFormData, setStep, step } = formikProps;
  const [direction, setDirection] = useState('next')
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={formData}
      onSubmit={async (values, actions) => {
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
                   <h5 className="flex text-blue subtitle">Method prefer</h5>
                   <hr className="custom-hr"/>
                  </div>
              </Col>
              <Col xs="12">
               <label>Name</label>
              </Col>
              <Col xs="12" style={{ marginBottom: 10 }}>
                <Field name="acc_name" type="text" 
                    className={
                      touched.acc_name && errors.acc_name
                        ? "form-control error"
                        : "form-control"} 
                  />
                <small className="error"> {touched.acc_name && errors.acc_name ? errors.acc_name : ""}</small>
                <Duration/>
              </Col>
              <Col xs="12">
               <label>Name on card</label>
              </Col>
              <Col xs="12" style={{ marginBottom: 10 }}>
                <div className="input-group">
                  <Field name="card_holder_name" type="text" 
                    className={
                      touched.card_holder_name && errors.card_holder_name
                        ? "form-control error"
                        : "form-control"} 
                    style={{borderRight:'none'}}
                  />
                  <div className="input-group-append">
                    <span className={
                      touched.card_holder_name && errors.card_holder_name
                        ? "input-group-text card-input error"
                        : "input-group-text card-input"} id="card-input">
                      <img src="/images/visa.svg" style={{height:'20px'}} />
                    </span>
                  </div>
                </div>

                <small className="error"> {touched.card_holder_name && errors.card_holder_name ? errors.card_holder_name : ""}</small>
              </Col>
              <Col xs="6">
                <Row>
                  <Col xs="12" className="p-0">
                   <label>Expiry date</label>
                  </Col>
                  <Col xs="12" className="p-0" style={{ marginBottom: 10 }}>
                    <Field name="exp_date" type="text" 
                      className={
                        touched.exp_date && errors.exp_date
                          ? "form-control error"
                          : "form-control"} 
                    />
                    <small className="error"> {touched.exp_date && errors.exp_date ? errors.exp_date : ""}</small>
                  </Col>
                </Row>
              </Col>
              <Col xs="6">
                <Row>
                  <Col xs="12" className="p-0">
                   <label>CVV <i class="fa fa-exclamation-circle" aria-hidden="true"></i></label>
                  </Col>
                  <Col xs="12" className="p-0" style={{ marginBottom: 10 }}>
                    <Field name="cvv" type="text" 
                      className={
                        touched.cvv && errors.cvv
                          ? "form-control error"
                          : "form-control"} 
                    />
                    <small className="error"> {touched.cvv && errors.cvv ? errors.cvv : ""}</small>
                  </Col>
                </Row>
              </Col>
              <Col xs="12" className="d-flex flex-column">
                 <small className="text-secondary-green cursor-pointer mt-2">Question?</small>
              </Col>
            </Row>
            <Row>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginTop:20 }}>
                <button className="btn btn-outline-warning rounded-20" onClick={(e) => { setStep(step - 1); }}>Previous</button>
                <button className="btn btn-primary rounded-20" type="submit" onClick={(e) => { setDirection('next') }}>Continue</button>
              </div>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormSecondStep;
