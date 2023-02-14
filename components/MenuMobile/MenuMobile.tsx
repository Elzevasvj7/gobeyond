import { FC } from "react";
import menuMobile from "./menuMobile.module.css";

interface IMenuMobile {
    isOpen : boolean
    handler: any
}
const MenuMobile: FC<IMenuMobile> = ({ isOpen, handler }) => {
  return (
    <>
      {isOpen ? (
        <div className={menuMobile.container}>
            <div onClick={handler}> cerrar</div>
            <div className={menuMobile.text}>soy el menu mobile</div>
        </div>
      ) : null}
    </>
  );
};

export default MenuMobile;
