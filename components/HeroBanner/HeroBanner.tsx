import Image from 'next/image';
import hero from '../../public/images/banner.png';
import hero_mobile from '../../public/images/banner_mobile.png';
import style from './hero.module.css';
import one from '../../public/onezero.svg';
import prime from '../../public/primexm.svg';
import { useTranslation } from 'react-i18next';

const HeroBanner = () => {
  const { t } = useTranslation('global');
  return (
    <>
      <div className={style.hero_container}>
        <Image src={hero} alt="Hero logo" fill className={style.hero_image} />
        <Image
          src={hero_mobile}
          alt="Hero logo"
          fill
          className={style.hero_image_mobile}
        />
        <div className={style.hero_text}>
          <div>
            <h1>{t('heroBanner.title')}</h1>
            <p>{t('heroBanner.description')}</p>
          </div>
        </div>
      </div>
      <div className={style.sponsor}>
        <div>
          <Image src={one} alt="" className={style.one_logo} />
        </div>
        <div>
          <Image src={prime} alt="" className={style.prime_logo} />
        </div>
      </div>
    </>
  );
};
export default HeroBanner;
