import { Box, Button } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import style from './style.module.css';

const folder = '/images/';

const Footer = () => {
  const { t } = useTranslation('global');
  return (
    <div className={style.content}>
      <h2>Copyright © GoBeyond 2023</h2>
      <h1>{t('footer.firstText')}</h1>
      <Box
        sx={{
          marginTop: 1,
          '& button': { height: 40, padding: 0, width: 40 },
          '.MuiButton-sizeMedium': { width: 10 },
        }}
      >
        <Button>
          <Image
            src={folder + 'iconDiscord.svg'}
            width={60}
            height={60}
            alt="iconDiscord"
          />
        </Button>
        <Button>
          <Image
            src={folder + 'iconInstagram.svg'}
            width={60}
            height={60}
            alt="iconInstagram"
          />
        </Button>
        <Button>
          <Image
            src={folder + 'iconTelegram.svg'}
            width={60}
            height={60}
            alt="iconTelegram"
          />
        </Button>
      </Box>
    </div>
  );
};

export default Footer;
