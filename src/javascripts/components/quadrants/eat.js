import util from '../../helpers/util';

let full = 50;

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class = "container">';
  domString += '<button id = "healthBtn" type="button">Health</button>';
  domString += '<button id = "poisonBtn" type="button">Poison</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
};


const getFullValue = () => {
  const fullValue = full;
  console.error(fullValue);
};

const addHealth = () => {
  if (full <= 90) {
    full += 10;
  }
  getFullValue();
};

const subHealth = () => {
  if (full >= 3) {
    full -= 3;
  }
  getFullValue();
};

const addEventListener = () => {
  const healthButton = document.getElementById('healthBtn');
  healthButton.addEventListener('click', addHealth);
  const poisonButton = document.getElementById('poisonBtn');
  poisonButton.addEventListener('click', subHealth);
};

export default { domStringBuilder, getFullValue, addEventListener };
