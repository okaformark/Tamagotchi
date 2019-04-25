import util from '../../helpers/util';

let strength = 100;

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class = "container">';
  domString += '<div id = "progressBar">';
  domString += '<label for="file">Strength:</label>';
  domString += `<progress id="file2" max="100" value=${strength}>100%</progress>`;
  domString += `<h4 id = "score">Score: ${strength}</h4>`;
  domString += '<button id = "courageBtn" type="button">Courage</button>';
  domString += '<button id = "robberyBtn" type="button">Robbery</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('fight', domString);
};
const getStrengthValue = () => {
  const strengthValue = strength;
  console.error(strengthValue);
  util.printToDom('file2', strengthValue);
};

const addStrength = () => {
  if (strength >= 1) {
    strength += 1;
    document.getElementById('file2').value = strength;
    document.getElementById('score').value = strength;
  }
  getStrengthValue();
};

const subStrength = () => {
  if (strength <= 100) {
    strength -= 10;
    document.getElementById('file2').value = strength;
    document.getElementById('score').value = strength;
  }
  getStrengthValue();
};

const addEventListener = () => {
  const healthButton = document.getElementById('courageBtn');
  healthButton.addEventListener('click', addStrength);
  const poisonButton = document.getElementById('robberyBtn');
  poisonButton.addEventListener('click', subStrength);
};

export default { domStringBuilder, getStrengthValue, addEventListener };
