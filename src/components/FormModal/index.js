import React from 'react';
import { Modal, Button } from 'antd';
import { NewTrainingForm } from '../NewTrainingForm';

export const FormModal = ({ modalType }) => {
    const [modal, contextHolder] = Modal.useModal();
    
    switch (modalType) {
        case 'ntf':
            const openFromTraining = () => modal.warning(config);
            const config = {
                title: 'Use Hook!',
                content: (
                    <NewTrainingForm />
                ),
            };
            return (
                <>
                    <Button type='primary' onClick={(openFromTraining)}>Nueva Capacitación</Button>
                    {contextHolder}
                </>
            )
            break;
    }
}