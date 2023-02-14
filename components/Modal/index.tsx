import { FC, ReactNode } from 'react';
import modalStyle from './modalStyle.module.css';

interface IModalR {
  children: ReactNode;
  stati: boolean;
}
const Modal: FC<IModalR> = ({ children, stati }) => {
  return (
    <>
      {stati && (
        <div className={modalStyle.overlay}>
          <div className={modalStyle.contentModal}>
            <div className={modalStyle.contenido}>{children}</div>
          </div>
          <div className={modalStyle.degraded} />
        </div>
      )}
    </>
  );
};

export default Modal;
