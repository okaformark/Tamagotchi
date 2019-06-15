import util from '../../helpers/util';
import pet from './Cave_man.gif';


const petPictureBuilder = () => {
  let domString = '';
  domString += '<div class = "" id = "petDiv">';
  domString += `<img src=${pet} id = "centeredImage">`;
  domString += '</div>';
  util.printToDom('pet', domString);
};

export default { petPictureBuilder };
