import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { Button } from '07-shared/ui/Button/Button';
import { Modal } from '07-shared/ui/Modal/Modal';
import { Portal } from '07-shared/ui/Portal/Portal';
import { Input } from '07-shared/ui/Input/Input';
import VK from '07-shared/assets/icons/vk.svg';

const MainPage = () => {
    // const { t } = useTranslation('main');
    const [error, setError] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    const [inputState, setInputState] = useState('');
    return (
        <div>
            <button type="button" onClick={() => setError(true)}>Error</button>
            <Button view="clear" onClick={() => setModal(true)}>Modal</Button>
            <Portal>
                <Modal
                    isOpen={modal}
                    onClose={() => setModal(false)}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis culpa cumque debitis, dolor excepturi maiores nihil
                    nostrum numquam odio, quae quasi quia reiciendis sunt unde
                    velit veritatis voluptas voluptatem voluptatibus.
                </Modal>
            </Portal>
            <hr />
            <br />
            <br />
            <br />
            <Input value="test" onChange={() => {}} label="label" disabled />
            <Input value="test" onChange={() => {}} label="label" labelPosition="left" />
            <Input
                value={inputState}
                onChangeValue={setInputState}
                label="label"
                labelPosition="top"
                placeholder="Введите текст..."
                modification="cleaner"
                error={inputState === '' ? 'required field' : ''}
            />
            <Input
                value={inputState}
                onChange={(e) => setInputState(e.target.value)}
                label="label"
                labelPosition="top"
                placeholder="Введите текст..."
                modification="counter"
                error={inputState === '' ? 'required field' : ''}
            />
            <Input value="" onChange={() => {}} label="label" labelPosition="top" placeholder="placeholder" />
            <Input value="test" onChange={() => {}} labelPosition="top" modification="icon" icon={<VK />} />
            <Input value="test" onChange={() => {}} labelPosition="top" error="Error: text error" />
            <Input value="test" onChange={() => {}} view="clear" />
            <Input value="test" onChange={() => {}} modification="secret" />
            <Input value="test" onChange={() => {}} modification="counter" />
            <Input value="test" onChange={() => {}} modification="cleaner" />
        </div>
    );
};

export default MainPage;
