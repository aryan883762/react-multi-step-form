import React from "react";
import { Row, Col } from "reactstrap";
import { Formik, Form, Field /*, FastField as Field */ } from "formik";
import * as Yup from "yup";
import MaskedInput from "react-text-mask";
import { Select } from "../../common/FormElement";
const validationSchema = Yup.object().shape({
  user_name: Yup.string().required("Please enter your name"),
  phone_number: Yup.string()
                .test('test-name', 'Incorrect input message', 
                  value=>value&&value.match(/\d/g).join('').length===9),
  country: Yup.string()
});
const contries = [
  { id: "US", name: "United States", value: "US", label: "United States"},
  { id: "AU", name: "Australia", value: "AU", label: "Australia"},
  { id: "BR", name: "Brazil", value: "BR", label: "Brazil"},
  { id: "IN", name: "India", value: "IN", label: "India"}
];
const phoneNumberMask = [
  /[1-9]/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/
];
const FormFirstStep = (formikProps) => {
  const { formData, setFormData, setStep, step } = formikProps;
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={formData}
      onSubmit={async (values, actions) => {
        setFormData(values, "***");
        setStep(step + 1);
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
                   <p className="flex text-blue subtitle">Title of the Form</p>
                   <hr className="custom-hr"/>
                  </div>
                 <small className="ml-2 text-blue">Information Fetchined</small>
              </Col>
              <Col xs="12">
                 <label htmlFor="firstName">Country</label>
              </Col>
              <Col xs="12" style={{ marginBottom: 10 }}>
                <Field
                  newName="country"
                  value={values.country}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  component={Select}
                  options={contries}
                  label="Select country"
                />
              </Col>
              <Col xs="12">
              <label>Number</label>
              </Col>
              <Col xs="12" style={{ marginBottom: 10 }}>
                <Field
                  name="phone_number" 
                  render={({ field }) => (
                    <MaskedInput
                      {...field}
                      mask={phoneNumberMask}
                      id="phone_number"
                      placeholder="0-0000-0000"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        touched.phone_number && errors.phone_number
                          ? "form-control error"
                          : "form-control"
                      }
                    />
                  )}
                />
                <small className="error"> {touched.phone_number && errors.phone_number ? errors.phone_number : ""}</small>
              </Col>
              <Col xs="12">
              <label>Name</label>
              </Col>
              <Col xs="12" style={{ marginBottom: 10 }}>
                <Field name="user_name" type="text" 
                   className={
                    touched.user_name && errors.user_name
                      ? "form-control error"
                      : "form-control"} 
                />
                <small className="error"> {touched.user_name && errors.user_name ? errors.user_name : ""}</small>
              </Col>
            </Row>
            <Row>
              <div style={{display: "flex",justifyContent: "flex-end",width: "100%"}}>
                <button className="btn btn-primary rounded-20" type="submit">
                  Continue
                </button>
              </div>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormFirstStep;
