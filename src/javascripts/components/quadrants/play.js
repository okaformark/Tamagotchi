import util from '../../helpers/util';

let fun = 50;

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class = "container">';
  domString += '<div id = "progressBar">';
  domString += '<label for="file">Fun:</label>';
  domString += `<progress id="file1" max="200" value=${fun}>100%</progress>`;
  domString += `<h4 id = "score">Score: ${fun}</h4>`;
  domString += '<button id = "hikingBtn" type="button">Hiking</button>';
  domString += '<button id = "raftingBtn" type="button">Rafting</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('play', domString);
};
const getFunValue = () => {
  const funValue = fun;
  console.error(funValue);
  util.printToDom('file1', funValue);
};

const hikingValue = () => {
  if (fun >= 2) {
    fun += 2;
    document.getElementById('file1').value = fun;
    document.getElementById('score').value = fun;
  }
  getFunValue();
};

const raftingValue = () => {
  if (fun < 200) {
    fun += 50;
    document.getElementById('file1').value = fun;
    document.getElementById('score').value = fun;
  }
  getFunValue();
};

const addEventListener = () => {
  const healthButton = document.getElementById('hikingBtn');
  healthButton.addEventListener('click', hikingValue);
  const poisonButton = document.getElementById('raftingBtn');
  poisonButton.addEventListener('click', raftingValue);
};

export default { domStringBuilder, getFunValue, addEventListener };
