import Image from "next/image";
import style from './bottom.module.css'
import tablet from 'public/images/tablet.svg'
import Button from '@mui/material/Button';
import { Box } from "@mui/material";

const BottomSection = () => {
  return (
    <>
      <div className={style.spacing} />
      <div className={style.container}>
        <div className={style.left}>
          <h1>Próximamente</h1>
          <br />
          <p>
            <span>PAMM / MAM. Segundo cuarto de 2023</span>
            <br />
            Exchange Crypo- Fiat / Fiat- Crypto.
          </p>
          <div className={style.Buttons}>
            <Box sx={{
              display: 'flex',
              '& Button': {
                marginRight: 2.5,
              }
            }}>
              <Button variant="contained" className={style.Button}>PAMM</Button>
              <Button variant="contained" className={style.Button}>MAM</Button>
            </Box>
          </div>
        </div>
        <div className={style.rigth}>
          <Image src={tablet} alt='img' className={style.img} />
        </div>
      </div>
      <div className={style.spacing} />
    </>
  );
};

export default BottomSection;
