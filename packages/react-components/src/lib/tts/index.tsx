// basic
import React, {useState} from 'react';
import {observer} from 'mobx-react';

// styles
import cls from './index.module.scss';

// stores
import PersonStore from './controller';

// Props
interface IProps {
    word?: string;
}

const TtsDemo: React.FC<IProps> = observer((props) => {
    const [store] = useState(() => PersonStore);
    const {word} = props;

    return (
        <>
            <div className={cls.ttsContainer}>
                这是一个tts组件，传参{word}
                person'name：{store.person.name}
                person'sex：{store.person.sex}
                <button onClick={store.person.changeName}>改变person’s name</button>
                <button onClick={store.person.resetName}>重置person’s name</button>
            </div>
        </>
    )
})

export default TtsDemo;
