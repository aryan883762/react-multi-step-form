import React, { useState } from "react";
import { Row, Col } from "reactstrap";
import { Formik, Form, Field /*, FastField as Field */ } from "formik";
import * as Yup from "yup";
import { Select } from "../../common/FormElement";
import { Duration } from "./Duration";
const validationSchema = Yup.object().shape({
  duration: Yup.string().required("Select duration")
});
const durations = [
  { id: 1, name: "Daily", value: "daily", label: "Daily" },
  { id: 2, name: "Weekly", value: "weekly", label: "Weekly"},
  { id: 3, name: "Monthly", value: "monthly", label: "Monthly"}

];
const FormThirdStep = (formikProps) => {
  const { formData, setFormData, setStep, step, setMailSent, setVerification } = formikProps;
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
                   <h5 className="flex text-blue subtitle">Select the duration</h5>
                   <hr className="custom-hr"/>
                  </div>
              </Col>
              <Col xs="12">
                 <label>Duration</label>
              </Col>
              <Col xs="12" style={{ marginBottom: 10 }}>
                <Field
                  newName="duration"
                  value={values.duration}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  component={Select}
                  options={durations}
                  label="Select duration"
                />
                <small style={{ color: "red", fontSize: 12}}> {touched.duration && errors.duration ? errors.duration : ""}</small>
                 {values.duration?<Duration/>:''}
              </Col>
              <Col xs="12" className="d-flex flex-column">
                 <small>Please select one from these to check your cycle of the recurecnce</small>
                 <small className="text-secondary-green cursor-pointer mt-2">Question?</small>
              </Col>
            </Row>
            <Row>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginTop:20 }}>
                <button className="btn btn-outline-warning rounded-20" onClick={(e) => { setMailSent(false);setVerification(false);setStep(step - 1); }}>Previous</button>
                <button className="btn btn-primary rounded-20" type="submit" onClick={(e) => { setDirection('next') }}>Continue</button>
              </div>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormThirdStep;
