import styled from 'styled-components';
import { device } from '../../utils/screenSize';

import { navProps } from './constants';
// ========================================
// 🔰 Base nav styled
// ========================================
export default styled.div.attrs({
  classNames: 'nav',
})`
  position: relative;
  button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
  // 🔰 Nav content style
  .nav-content {
    position: fixed;
    flex-direction: column;
    gap: 20px;
    background-color: var(--blue);
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0;
    z-index: 0;
    transition: margin .3s ease-out;
    @media ${device.mobileS} {
      &.show-menu { //🔥 Show menu if class exits
        margin-left: 0;
      }
      margin-left: -100%;
      width: 100%;
    }
    @media ${device.tablet} {
      margin-left: 0;
      width: ${navProps.baseWith};
    }
    .nav-menu-logo
    .img-logo {
      height: 50px;
    }
  }
  // 🔰 Nav responsive style
  .nav-responsive {
    position: fixed;
    background-color: var(--blue);
    width: ${navProps.mobileWith};
    padding: 10px 0;
    z-index: 1;
    box-shadow: var(--shadow);
    @media ${device.mobileS} {
      display: block;
    }
    @media ${device.tablet} {
      display: none;
    }
    .nav-responsive-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .nav-menu-item {
      position: absolute;
      left: 20px;
      &:hover { 
        opacity: .5;
      }
    }

    .nav-menu-logo
    .img-logo {
      height: 60px;
    }
  }
`;
