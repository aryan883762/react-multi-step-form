import React from "react";
import ReactSelect from "react-select";
import ReactDate from "react-datetime";
import moment from "moment";
const colourStyles = {
  dropdownIndicator: (base) => ({
    ...base,
    color: "#787878" // Custom colour
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      fontSize: 12
    };
  },

  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "#ced4da",
    padding: "-5px 12px -5px 35px",
    marginTop: 5,
    width: "100%"
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles
      // backgroundColor: '#fff'
    };
  }
};

export const Select = ({
  options,
  handleBlur,
  setFieldValue,
  label,
  value,
  newName
}) => (
  <ReactSelect
    styles={colourStyles}
    placeholder={label}
    components={{
      IndicatorSeparator: () => null
    }}
    options={options}
    name={newName}
    value={options ? options.find((option) => option.value === value) : ""}
    onChange={(option) => setFieldValue(newName, option.value)}
    onBlur={handleBlur}
  />
);

export const DateTime = ({
  handleBlur,
  setFieldValue,
  label,
  value,
  newName
}) => {
  return (
    <ReactDate
      value={value}
      placeholder={label}
      onChange={(d) => {
        setFieldValue(newName, moment(d).format("YYYY-MM-DD hh:mm"));
      }}
      closeOnSelect={true}
      onBlur={handleBlur}
    />
  );
};
