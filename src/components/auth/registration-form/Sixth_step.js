import React from "react";
import { Row, Col } from "reactstrap";
import { Formik, Form } from "formik";

const FormSixthStep = (formikProps) => {
  const { formData, setFormData, setStep, step } = formikProps;
  return (
    <Formik
      initialValues={formData}
      onSubmit={async (values, actions) => {
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
                <img src="/images/success-img.jpg" style={{height:'35vh'}} />
              </Col>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormSixthStep;
