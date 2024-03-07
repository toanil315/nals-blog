import { CheckIcon } from '@/components';
import { ACTION_ENUM } from '@/constants';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  blogId: string;
  type: ACTION_ENUM;
}

const SuccessModal = ({ isOpen, toggle, blogId, type }: Props) => {
  const { t } = useTranslation();

  const headerContent =
    type === ACTION_ENUM.CREATE ? t('form.blog.createSuccess') : t('form.blog.updateSuccess');

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      backdrop='static'
      fade
      centered
    >
      <ModalHeader
        toggle={toggle}
        className='[&>h5]:w-full [&>h5]:!flex-shrink-0'
      >
        <div className='flex flex-col items-center w-full'>
          <div className=' w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4'>
            <CheckIcon color='white' />
          </div>
          <h3 className='text-md font-semibold'>{headerContent}</h3>
        </div>
      </ModalHeader>
      <ModalFooter className='flex justify-center'>
        <Link to={`/blogs/${blogId}`}>
          <Button
            className='px-4 py-2'
            color='success'
          >
            {t('viewBlogNow')}
          </Button>
        </Link>
      </ModalFooter>
    </Modal>
  );
};

export default SuccessModal;
