import util from '../../helpers/util';

const domStringBuilder = () => {
  let domString = '';
  domString += '<div class = "container">';
  domString += '<button type="button">Health</button>';
  domString += '<button type="button">Poison</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
};

export default { domStringBuilder };
