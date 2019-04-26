import util from '../../helpers/util';

let energy = 50;

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class = "container">';
  domString += '<div id = "progressBar">';
  domString += '<label for="file">Energy:</label>';
  domString += `<progress id="file3" max="200" value=${energy}>100%</progress>`;
  domString += `<h4 id = "score">Score: ${energy}</h4>`;
  domString += '<button id = "napBtn" type="button">Nap</button>';
  domString += '<button id = "slumberBtn" type="button">Slumber</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('sleep', domString);
};
const getSleepValue = () => {
  const sleepValue = energy;
  console.error(sleepValue);
  util.printToDom('file3', sleepValue);
};

const napValue = () => {
  if (energy >= 50) {
    energy += 50;
    document.getElementById('file3').value = energy;
    document.getElementById('score').value = energy;
  }
  getSleepValue();
};

const slumberValue = () => {
  if (energy >= 50) {
    energy += 60;
    document.getElementById('file3').value = energy;
    document.getElementById('score').value = energy;
  }
  getSleepValue();
};

const addEventListener = () => {
  const napButton = document.getElementById('napBtn');
  napButton.addEventListener('click', napValue);
  const slumberButton = document.getElementById('slumberBtn');
  slumberButton.addEventListener('click', slumberValue);
};

export default { domStringBuilder, getSleepValue, addEventListener };
