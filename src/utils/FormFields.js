import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import moment from 'moment'

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
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor={`outlined-${label}-native-simple`}>{label}</InputLabel>
      <Select
        value={values[id]}
        id={id}
        variant="outlined"
        onChange={(event) => {
          handleChange(event, valueField, id);
        }}
        inputProps={{
          name: { label },
          id: `outlined-${label}-native-simple`,
        }}
        InputLabelProps={{ shrink: true }}
      >
        {options.map((bg, index) => (
          <option value={bg} key={index}>{bg}</option>
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
      InputProps={type==='date' ? {inputProps: { max: moment(new Date()).format("YYYY-MM-DD")} } : {}}
    />
  );
};

export default FormFields;
