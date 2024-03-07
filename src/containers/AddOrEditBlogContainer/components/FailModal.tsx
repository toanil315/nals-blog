import { CrossIcon } from '@/components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const FailModal = ({ isOpen, toggle }: Props) => {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      backdrop
      fade
      centered
    >
      <ModalHeader
        toggle={toggle}
        className='[&>h5]:w-full [&>h5]:!flex-shrink-0'
      >
        <div className='flex flex-col items-center w-full'>
          <div className=' w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4'>
            <CrossIcon stroke='white' />
          </div>
          <h3 className='text-md font-semibold'>{t('form.blog.fail')}</h3>
        </div>
      </ModalHeader>
      <ModalFooter className='flex justify-center'>
        <Button
          className='px-6 py-2 bg-green-800'
          color='success'
          onClick={toggle}
        >
          {t('close')}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default FailModal;
