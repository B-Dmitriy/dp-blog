import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { Button } from '07-shared/ui/Button/Button';
import { Modal } from '07-shared/ui/Modal/Modal';
import { Portal } from '07-shared/ui/Portal/Portal';

const MainPage = () => {
    // const { t } = useTranslation('main');
    const [error, setError] = useState(false);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

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
        </div>
    );
};

export default MainPage;
