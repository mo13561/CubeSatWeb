import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBtnWrap,
    SidebarLink,
    SidebarRoute,
    SidebarWrapper,
    SidebarMenu
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>About Polaris</SidebarLink>
            <SidebarLink to="data" onClick={toggle}>Data</SidebarLink>
            <SidebarLink to="graphs" onClick={toggle}>Graphs</SidebarLink>
            <SidebarLink to="contactus" onClick={toggle}>Contact Us</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
              <SidebarRoute to="bookings">Bookings</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    );
}

export default Sidebar
