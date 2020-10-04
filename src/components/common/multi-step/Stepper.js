import React from "react";

export const Stepper = (props) => {
  const { step, totalStep, stepsTitle } = props;

  return (
    <>
      <div className="step-form container">
        <div className="d-flex justify-content-center">
          <div className="step-side">
             <div className="d-flex flex-row align-items-center">
               <div className="step-line step-selected-line" />
             </div>
            {[...Array(totalStep).keys()].map((item, index) => {
              return (
                <div
                  className="d-flex flex-row align-items-center"
                  key={index}
                >
                  <div
                    className={`position-relative step-number   ${
                      step === index + 1 || step > index + 1
                        ? " step-selected"
                        : "step-not-selected"
                    }  ${step === index + 1 ? "circle" : ""}`}
                  >
                    {index + 1}
                    {step > index+1?<small className="position-absolute font-weight-bold" style={{color:'#1e8582',top:'22px'}}>{stepsTitle[index]?.toString().toUpperCase()}</small>:''}
                  </div>
                  <div
                    className={`step-line ${
                      step > index + 1
                        ? "step-selected-line"
                        : "step-not-selected"
                    } `}
                  />
                </div>
              );
            })}
            {/* <div className={`step-number   ${step === 1 || step > 1 ? ' step-selected' : 'step-not-selected'}  ${step === 1 ? 'circle' : ''}`} >1</div>
            <div className={`step-line ${step > 1 ? 'step-selected-line' : 'step-not-selected'} `} />
            <div className={`step-number ${step === 2 || step > 2 ? 'step-selected' : 'step-not-selected'} ${step === 2 ? 'circle' : ''}`}>2</div>
            <div className={`step-line ${step > 2 ? 'step-selected-line' : 'step-not-selected'} `} />
            <div className={`step-number ${step === 3 || step > 3 ? 'step-selected' : 'step-not-selected'} ${step === 3 ? 'circle' : ''}`}>3</div>
            <div className={`step-line ${step > 3 ? 'step-selected-line' : 'step-not-selected'} `} />
            <div className={`step-number ${step === 4 || step > 4 ? 'step-selected' : 'step-not-selected'} ${step === 4 ? 'circle' : ''}`}>4</div>
            <div className={`step-line ${step > 4 ? 'step-selected-line' : 'step-not-selected'} `} />
            <div className={`step-number ${step === 5 || step > 5 ? 'step-selected' : 'step-not-selected'} ${step === 5 ? 'circle' : ''} `}>5</div> */}
          </div>
        </div>
      </div>
    </>
  );
};
