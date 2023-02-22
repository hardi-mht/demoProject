import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";

const FormFields = ({
  id,
  label,
  placeholder,
  type,
  options,
  values,
  handleChange,
  valueField,
}) => {
  return type === "select" ? (
    <FormControl fullWidth>
      <Select
        value={values[id]}
        id={id}
        variant="outlined"
        onChange={(event) => {
          handleChange(event, valueField);
        }}
        // inputProps={{ "aria-label": "bloodgroup" }}
      >
        <option value="a" disabled>
          Blood Group
        </option>
        {options.map((bg, index) => (
          <option value={index}>{bg}</option>
        ))}
      </Select>
    </FormControl>
  ) : type === "radio" ? (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        id={id}
        row
        value={values[id]}
        onChange={(event) => {
          handleChange(event, valueField);
        }}
      >
        {options.map((item) => (
          <FormControlLabel
            value={item}
            control={<Radio id={id} />}
            label={item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  ) : (
    <TextField
      // error
      onChange={(event) => {
        handleChange(event, valueField);
      }}
      value={values[id]}
      type={type}
      fullWidth
      id={id}
      label={label}
      placeholder={placeholder}
      InputLabelProps={{ shrink: true }}
      // helperText="Incorrect entry."
      variant="outlined"
    />
  );
};

export default FormFields;
