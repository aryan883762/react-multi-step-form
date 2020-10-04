import React, { useState } from "react";
import FirstPage from "./First_step";
import SecondPage from "./Second_step";
import ThirdPage from "./Third_step";
import FourthPage from "./Fourth_step";
import FifthPage from "./Fifth_step";
import SixthPage from "./Sixth_step";
import { Stepper } from "../../common/multi-step/Stepper";
import { Row, Col } from "reactstrap";

const Registration = () => {
  const [step, setStep] = useState(1);
  const [totalStep] = useState(5);
  const [stepsTitle] = useState(['Title','Contact','Duration','Prefer']);
  const [mailSent, setMailSent] = useState(false)
  const [verification, setVerification] = useState(false)
  const [formData, setFormData] = useState({
    user_name: "Jon Doe",
    phone_number: "",
    country: "US",
    email: "",
    contact: "",
    duration: "",
    acc_name: "",
    password: "",
    card_holder_name: "",
    exp_date: "",
    cvv: "",
  });
  return (
    <>
      <div className="container">
        <div className="registration-form-container">
        {!mailSent && !verification?(<Row className="d-flex justify-content-center">
            <div className="d-flex-column text-center">
               <h1 className="mb-2">{step!=totalStep+1?'Registration Form':'Done Yeah'}</h1>
               <span className="">{step!=totalStep+1?'This is the registration Form':'You\'re done here'}</span>
            </div>
          </Row>):''}
          {step!=totalStep+1 && !mailSent && !verification ?(<Row>
            <Stepper step={step} totalStep={totalStep} stepsTitle={stepsTitle} />
          </Row>):''}
          <Row>
              <div className="w-full">
                {step === 1 ? (
                  <FirstPage
                    formData={formData}
                    setFormData={(d) => setFormData(d)}
                    setStep={setStep}
                    step={step}
                  />
                ) : step === 2 ? (
                  <SecondPage
                    formData={formData}
                    setFormData={(d) => setFormData(d)}
                    setStep={setStep}
                    step={step}
                    setMailSent={setMailSent}
                    mailSent={mailSent}
                    setVerification={setVerification}
                    verification={verification}
                  />
                ): step === 3 ? (
                  <ThirdPage
                    formData={formData}
                    setFormData={(d) => setFormData(d)}
                    setStep={setStep}
                    step={step}
                    setMailSent={setMailSent}
                    setVerification={setVerification}
                  />
                ):step === 4 ? (
                  <FourthPage
                    formData={formData}
                    setFormData={(d) => setFormData(d)}
                    setStep={setStep}
                    step={step}
                  />
                ):step === 5 ? (
                  <FifthPage
                    formData={formData}
                    setFormData={(d) => setFormData(d)}
                    setStep={setStep}
                    step={step}
                  />
                ):(
                  <SixthPage
                    formData={formData}
                    setFormData={(d) => setFormData(d)}
                    setStep={setStep}
                    step={step}
                  />
                )
                }
              </div>
          </Row>
        </div>

      </div>
    </>
  );
};

export default Registration;
