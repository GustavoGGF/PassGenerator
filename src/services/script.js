const btn = document.querySelector("#btn");
const pass = document.querySelector("h3");
const inp = document.querySelector("input");

const getLetter = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
  const symbols = "!@#$%&*()[{]}";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePass = (task) => {
  let password = "";
  const passwordLenght = inp.value;

  const generator = [getLetter, getNumber, getSymbol, getUpper];

  for (i = 0; i < passwordLenght; i = i + 4) {
    generator.forEach(() => {
      const randomValue =
        generator[Math.floor(Math.random() * generator.length)]();

      password = password + randomValue;
    });
  }

  password = password.slice(0, passwordLenght);
  pass.innerText = password;
};

btn.addEventListener("click", () => {
  generatePass(getLetter, getUpper, getNumber, getSymbol);
});
