import util from '../../../helpers/util';

let full = 50;

const domStringBuilder = () => {
  console.error('domStringBuilder');
  let domString = '';
  domString += '<div class ="container">';
  domString += '<div id ="progressBar">';
  domString += '<label for= "file">Life:</label>';
  domString += `<progress id="file" max="100" value=${full}>100%</progress>`;
  domString += `<h4 id = "score">Score: ${full}</h4>`;
  domString += '<button id = "healthBtn" type="button">Health</button>';
  domString += '<button id = "poisonBtn" type="button">Poison</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('eat', domString);
};
const getFullValue = () => {
  const fullValue = full;
  console.error(fullValue);
  util.printToDom('file', fullValue);
};

const addHealth = () => {
  if (full <= 90) {
    full += 10;
    document.getElementById('file').value = full;
    document.getElementById('score').value = full;
  }
  getFullValue();
};

const subHealth = () => {
  if (full >= 3) {
    full -= 3;
    document.getElementById('file').value = full;
    document.getElementById('score').value = full;
  }
  getFullValue();
};

const addEventListener = () => {
  console.error('event');
  const healthButton = document.getElementById('healthBtn');
  healthButton.addEventListener('click', addHealth);
  const poisonButton = document.getElementById('poisonBtn');
  poisonButton.addEventListener('click', subHealth);
};

export default { domStringBuilder, getFullValue, addEventListener };
