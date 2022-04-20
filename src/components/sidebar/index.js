import React from 'react'
import {
    SidebarContainer, Icon, CloseIcon, SidebarRoute, SideBtnWrap, SidebarWrapper, SidebarMenu,
    //SidebarLink 
} from './SidebarElements'
import { Link } from 'react-router-dom'

export const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <Link className='menumobile' to="/" onClick={toggle}>
                        Home
                    </Link>
                    <Link className='menumobile' to="/drmusa" onClick={toggle}>
                        Meet Dr. Musa
                    </Link>
                    <Link className='menumobile' to="news" onClick={toggle}>
                        News
                    </Link>
                    <Link className='menumobile' to="projects" onClick={toggle}>
                        Projects
                    </Link>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to={{ pathname: "https://www.airfunding.net/s/8c180e9b-148b-4e59-9b75-4a0867b2c49b" }} target="_blank" onClick={toggle}>
                        Donate
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}