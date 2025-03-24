// basic
import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';

// styles
import cls from './index.module.scss';

// stores
import PersonStore from './controller';

// utils
import {compApiClient} from '../utils/request';

// Props
interface IProps {
    word?: string;
}

const SpeechSynthesis: React.FC<IProps> = observer((props) => {
    const [store] = useState(() => PersonStore);
    const {word} = props;

    useEffect(() => {
        compApiClient
            .get('http://ai-eng.bcc-bdbl.baidu.com:8088/platform/page/json?requestUrl=/console/ai-engine/speech/experience-center')
            .then(res => {
                console.log('res: ', res);
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

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

export default SpeechSynthesis;
