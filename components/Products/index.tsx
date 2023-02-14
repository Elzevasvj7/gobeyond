import * as React from 'react';
import Image from 'next/image';
import style from './style.module.css';
import { useState } from 'react';
import Modal from '../Modal';
import { useTranslation } from 'react-i18next';

const folder = '/images/';

const Products = () => {
  const [modalLiquidity, setModalLiquidity] = useState(false);
  const [modalSpot, setModalSpot] = useState(false);
  const [modalCash, setodalCash] = useState(false);
  const [modalEnergy, setModalEnergy] = useState(false);
  const [modalCFD, setModalCFD] = useState(false);
  const [modalStock, setMmodalStock] = useState(false);
  const handlemodalLiquidity = () => setModalLiquidity(!modalLiquidity);
  const handlemodalSpot = () => setModalSpot(!modalSpot);
  const handlemodalCash = () => setodalCash(!modalCash);
  const handlemodalEnergy = () => setModalEnergy(!modalEnergy);
  const handlemodalCFD = () => setModalCFD(!modalCFD);
  const handlemodalStock = () => setMmodalStock(!modalStock);

  const { t } = useTranslation('global');

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.contentTitle}>{t('products.title')}</h1>
        <div className={style.contentBtn}>
          <div className={style.contentBtnImg}>
            <button onClick={handlemodalLiquidity}>
              <Image
                src={folder + 'product1.svg'}
                alt={''}
                width={60}
                height={60}
              />
              <h3>{t('products.btnLiquidity')}</h3>
            </button>
            <button onClick={handlemodalSpot}>
              <Image
                src={folder + 'product2.svg'}
                alt={''}
                width={60}
                height={60}
              />
              <h3 className={style.titleSpot}>{t('products.btnSpot')}</h3>
            </button>
            <button onClick={handlemodalCash}>
              <Image
                src={folder + 'product3.svg'}
                alt={''}
                width={60}
                height={60}
              />
              <h3>{t('products.btnCash')}</h3>
            </button>
          </div>
          <div>
            <button onClick={handlemodalEnergy}>
              <Image
                src={folder + 'product4.svg'}
                alt={''}
                width={60}
                height={60}
              />
              <h3>{t('products.btnEnergies')}</h3>
            </button>
            <button onClick={handlemodalCFD}>
              <Image
                src={folder + 'product5.svg'}
                alt={''}
                width={60}
                height={60}
              />
              <h3>{t('products.btnCryptocurrencies')}</h3>
            </button>
            <button onClick={handlemodalStock}>
              <Image
                src={folder + 'product6.svg'}
                alt={''}
                width={60}
                height={60}
              />
              <h3>{t('products.btnStock')}</h3>
            </button>
          </div>
        </div>
        <Modal stati={modalLiquidity}>
          <div className={style.contentModal}>
            <div className={style.contenHeaderModal}>
              <div className={style.title}>
                <Image
                  src={folder + 'logo.svg'}
                  alt={''}
                  width={80}
                  height={80}
                />
                <h1>{t('products.btnLiquidity')}</h1>
              </div>
              <div>
                <button onClick={handlemodalLiquidity}>X</button>
              </div>
            </div>
            <div className={style.contentDescription}>
              <p>
                {t('products.descriptionLiquidity.firt')}
                <br />
                <br />
                {t('products.descriptionLiquidity.second')}
              </p>
              <Image
                src={folder + 'imgModalL.png'}
                alt={''}
                width={300}
                height={300}
              />
            </div>
          </div>
        </Modal>
        <Modal stati={modalSpot}>
          <div className={style.contentModal}>
            <div className={style.contenHeaderModal}>
              <div className={style.title}>
                <Image
                  src={folder + 'logo.svg'}
                  alt={''}
                  width={80}
                  height={80}
                />
                <h1>{t('products.btnSpot')}</h1>
              </div>
              <div>
                <button onClick={handlemodalSpot}>X</button>
              </div>
            </div>
            <div className={style.contentDescription}>
              <p>
                {t('products.descriptionSpot.firt')}
                <br />
                <br />
                {t('products.descriptionSpot.second')}
              </p>
              <Image
                src={folder + 'imgModalS.png'}
                alt={''}
                width={300}
                height={300}
              />
            </div>
          </div>
        </Modal>
        <Modal stati={modalCash}>
          <div className={style.contentModal}>
            <div className={style.contenHeaderModal}>
              <div className={style.title}>
                <Image
                  src={folder + 'logo.svg'}
                  alt={''}
                  width={80}
                  height={80}
                />
                <h1>{t('products.btnCash')}</h1>
              </div>
              <div>
                <button onClick={handlemodalCash}>X</button>
              </div>
            </div>
            <div className={style.contentDescription}>
              <p>
                {t('products.descriptionCash.firt')}
                <br />
                <br />
                {t('products.descriptionCash.second')}
              </p>
              <Image
                src={folder + 'imgModalE.png'}
                alt={''}
                width={300}
                height={300}
              />
            </div>
          </div>
        </Modal>
        <Modal stati={modalEnergy}>
          <div className={style.contentModal}>
            <div className={style.contenHeaderModal}>
              <div className={style.title}>
                <Image
                  src={folder + 'logo.svg'}
                  alt={''}
                  width={80}
                  height={80}
                />
                <h1>{t('products.btnEnergies')}</h1>
              </div>
              <div>
                <button onClick={handlemodalEnergy}>X</button>
              </div>
            </div>
            <div className={style.contentDescription}>
              <p>
                {t('products.descriptionEnergies.firt')}
                <br />
                <br />
                {t('products.descriptionEnergies.second')}
              </p>
              <Image
                src={folder + 'imgModalLE.png'}
                alt={''}
                width={300}
                height={300}
              />
            </div>
          </div>
        </Modal>
        <Modal stati={modalCFD}>
          <div className={style.contentModal}>
            <div className={style.contenHeaderModal}>
              <div className={style.title}>
                <Image
                  src={folder + 'logo.svg'}
                  alt={''}
                  width={80}
                  height={80}
                />
                <h1>{t('products.btnCryptocurrencies')}</h1>
              </div>
              <div>
                <button onClick={handlemodalCFD}>X</button>
              </div>
            </div>
            <div className={style.contentDescription}>
              <p>
                {t('products.descriptionCryptocurrencies.firt')}
                <br />
                <br />
                {t('products.descriptionCryptocurrencies.second')}
              </p>
              <Image
                src={folder + 'imgModalC.png'}
                alt={''}
                width={300}
                height={300}
              />
            </div>
          </div>
        </Modal>
        <Modal stati={modalStock}>
          <div className={style.contentModal}>
            <div className={style.contenHeaderModal}>
              <div className={style.title}>
                <Image
                  src={folder + 'logo.svg'}
                  alt={''}
                  width={80}
                  height={80}
                />
                <h1>{t('products.btnStock')}</h1>
              </div>
              <div>
                <button onClick={handlemodalStock}>X</button>
              </div>
            </div>
            <div className={style.contentDescription}>
              <p>
                {t('products.descriptionStock.firt')}
                <br />
                <br />
                {t('products.descriptionStock.second')}
              </p>
              <Image
                src={folder + 'imgModalA.png'}
                alt={''}
                width={300}
                height={300}
              />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default Products;
