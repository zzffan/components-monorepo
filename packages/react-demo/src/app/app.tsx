// Uncomment this line to use CSS modules
import styles from './app.module.scss';
import NxWelcome from "./nx-welcome";
import {TtsDemo} from '../../../react-components/dist/index';
import '../../../react-components/dist/style.css';

export function App() {

  return (
    <div>
      <div className={styles.testContainer}>
        <TtsDemo word="~~~这是穿进去的参数~~~"></TtsDemo>
      </div>
      <NxWelcome title="@demo-mono-repo/react-demo"/>
    </div>
  );
}

export default App;
