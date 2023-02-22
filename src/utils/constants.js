export const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
export const formFields = [
  {
    id: "firstname",
    label: "First Name",
    placeholder: "Hardi",
    type: "text",
  },
  {
    id: "middlename",
    label: "Middle Name",
    placeholder: "Ketankumar",
    type: "text",
  },
  {
    id: "lastname",
    label: "Last Name",
    placeholder: "Mehta",
    type: "text",
  },
  {
    id: "mobilenumber",
    label: "Mobile Number",
    placeholder: "9999000112",
    type: "text",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "upforce@gmail.com",
    type: "email",
  },
  {
    id: "birthdate",
    label: "Birthday",
    type: "date",
  },
  {
    id: "age",
    label: "Age",
    placeholder: "23",
    type: "number",
  },
  {
    id: "bloodgroup",
    options: bloodGroups,
    type: "select",
  },
  {
    id: "height",
    label: "Height",
    placeholder: "5.0",
    type: "number",
  },
  {
    id: "weight",
    label: "Weight",
    placeholder: "40",
    type: "number",
  },
  {
    id: "gender",
    label: "Gender",
    options: ["Female", "Male"],
    type: "radio",
  },
  {
    id: "maritalstatus",
    label: "Marital Status",
    options: ["Single", "Married", "Divorced", "Widowed"],
    type: "radio",
  },
];
