export const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
export const city = [
  "Ahmedabad",
  "Bhavnagar",
  "Surat",
  "Rajkot",
  "Mehsana",
  "Mumbai",
  "Pune",
];
export const state = ["Gujarat", "Mahrastra"];
export const countries = ["India", "USA"];

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
    label: "Blood Groups",
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

export const addressFormFields = [
  {
    id: "addLine1",
    label: "Address Line 1",
    placeholder: "Pakwan Chock",
    type: "text",
  },
  {
    id: "addLine2",
    label: "Address Line 2",
    placeholder: "Bodakdev, Ahmedabad",
    type: "text",
  },
  {
    id: "city",
    label: "City",
    options: city,
    type: "select",
  },
  {
    id: "state",
    label: "State",
    options: state,
    type: "select",
  },
  {
    id: "country",
    label: "Countries",
    options: countries,
    type: "select",
  },
  {
    id: "pincode",
    label: "PinCode",
    type: "number",
  },
];
