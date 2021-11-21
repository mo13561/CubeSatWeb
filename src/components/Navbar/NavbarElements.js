import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

  
export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.85rem;
  position: sticky;
  top: 0;
  z-index: 10;
  margin-top: -80px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  align-items: center;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkS)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
 display: none;
  @media screen and (max-width: 768px) {
    display:block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  padding: 0;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  padding: 80px;
  @media screen and (max-width: 1240px) {
    padding: 40px
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`; 

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;


  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
   border-radius: 9px;
   background: purple;
   white-space: nowrap;
   padding: 10px 22px;
   height: 20%;
   color: white;
   font-size: 16px;
   outline: none;
   border: none;
   cursor: pointer;
   transition: all 0.2s ease-in-out;
   text-decoration: none;
   display: flex;
   align-items: center;
   align-content: center;
   align-self: center;
   text-align: center;

   &:hover {
     transition: all 0.2s ease-in-out;
     background: #fff;
     color: #010606;
   }

   @media screen and (max-width: 768px) {
    display: none;
  }
`;
