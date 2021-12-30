import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBtnWrap,
    SidebarLink,
    SidebarRoute,
    SidebarWrapper,
    SidebarMenu,
    SidebarPageLink
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
            <SidebarPageLink to="data" onClick={toggle}>Data</SidebarPageLink>
            <SidebarPageLink to="graphs" onClick={toggle}>Graphs</SidebarPageLink>
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
