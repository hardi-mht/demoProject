import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import moment from "moment";

const FormFields = ({
  id,
  label,
  placeholder,
  type,
  options,
  values,
  handleChange,
  valueField,
  error,
}) => {
  return type === "select" ? (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor={`outlined-${label}-native-simple`}>
        {label}
      </InputLabel>
      <Select
        value={values[id]}
        id={id}
        variant="outlined"
        onChange={(event) => {
          handleChange(event, valueField, id);
        }}
        inputProps={{
          id: `outlined-${label}-native-simple`,
          "aria-label": `${label}`,
        }}
      >
        {options.map((bg, index) => (
          <option value={bg} key={index}>
            {bg}
          </option>
        ))}
      </Select>
      {error[id] && (
        <FormHelperText error={error[id]}>{error[id]}</FormHelperText>
      )}
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
            key={item}
            control={<Radio id={id} />}
            label={item}
          />
        ))}
      </RadioGroup>
      {error[id] && (
        <FormHelperText error={error[id]}>{error[id]}</FormHelperText>
      )}
    </FormControl>
  ) : (
    <TextField
      error={error[id]}
      helperText={error[id] ? error[id] : ""}
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
      variant="outlined"
      InputProps={
        type === "date"
          ? { inputProps: { max: moment(new Date()).format("YYYY-MM-DD") } }
          : {}
      }
    />
  );
};

export default FormFields;
