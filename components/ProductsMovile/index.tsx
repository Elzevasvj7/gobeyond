import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import style from './style.module.css';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const folder = '/images/';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const ProductsMovile = () => {
  const [value, setValue] = useState(0);
  const { t } = useTranslation('global');
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  return (
    <div className={style.content}>
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          allowScrollButtonsMobile
          scrollButtons
          aria-label="visible arrows tabs example"
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
            '& Button': {
              color: '#ffffff',
              fontSize: 12,
              textTransform: 'inherit',
            },
            bgcolor: '#152A46',
            color: '#ffffff',
            width: '100%',
            height: 60,
            display: 'flex',
            alignItems: 'center',
            '& .MuiTab-root.Mui-selected': {
              color: '#42E8E0',
            },
            '& span': {
              display: 'none',
            },
          }}
        >
          <Tab label={`${t('products.btnLiquidity')}`} />
          <Tab label={`${t('products.btnSpot')}`} />
          <Tab label={`${t('products.btnCash')}`} />
          <Tab label={`${t('products.btnEnergies')}`} />
          <Tab label={`${t('products.btnCryptocurrencies')}`} />
          <Tab label={`${t('products.btnStock')}`} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className={style.contentModal}>
            <h1>{t('products.btnLiquidity')}</h1>
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
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className={style.contentModal}>
            <h1>{t('products.btnSpot')}</h1>
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
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className={style.contentModal}>
            <h1>{t('products.btnCash')}</h1>
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
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className={style.contentModal}>
            <h1>{t('products.btnEnergies')}</h1>
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
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div className={style.contentModal}>
            <h1>{t('products.btnCryptocurrencies')}</h1>
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
        </TabPanel>
        <TabPanel value={value} index={5}>
          <div className={style.contentModal}>
            <h1>{t('products.btnStock')}</h1>
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
        </TabPanel>
      </Box>
    </div>
  );
};
export default ProductsMovile;
