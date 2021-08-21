//Defining wording for password generation
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const createPassword = (
  length = 8,
  hasNumbers = true,
  hasSymbols = true,
  hasCharactors = true
) => {
  let chars = alpha;
  hasNumbers ? (chars += numbers) : "";
  hasSymbols ? (chars += symbols) : "";
  hasCharactors ? (chars += alpha) : "";

  return generatePassword(length, chars);
};

const generatePassword = (length, chars) => {
  let password = "";

  //Generating random values from Math.random function
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

module.exports = createPassword;
