import '../styles/main.scss';
import eat from './components/quadrants/eat';

const init = () => {
  eat.domStringBuilder();
  eat.addEventListener();
  eat.getFullValue();
};

init();
