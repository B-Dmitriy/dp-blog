import { Modal } from '07-shared/ui/Modal/Modal';
import { AuthForm } from '05-features/Auth/ui/AuthForm/AuthForm';

interface AuthModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

const AuthModal = ({ isOpen, closeModal }: AuthModalProps) => (
    <div>
        <Modal
            isOpen={isOpen}
            onClose={closeModal}
        >
            <AuthForm onCancel={closeModal} />
        </Modal>
    </div>
);
export default AuthModal;
