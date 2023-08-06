const REGEX = {
  passwordRegex: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
  emailRegex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  usernameRegex: /^[a-zA-Z\s]*$/,
  phoneRegex: /^\s*-?[0-9]{0,10}\s*$/
};

export default REGEX;
