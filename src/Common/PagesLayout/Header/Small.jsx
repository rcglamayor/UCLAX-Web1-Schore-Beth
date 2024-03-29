import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Components ---------------------------*/
import SiteLogo from '../SiteLogo/SiteLogo.jsx';
import Hamburger from './Hamburger.jsx';

const Small = () => {

    const [isMenuShowing, isMenuShowingUpdate] = useState(false);

    const toggleMenu = () => {
        isMenuShowingUpdate(!isMenuShowing);
    }

    const hideMenu = () => {
        isMenuShowingUpdate(false);
    }

    useEffect(() => {
        if (isMenuShowing) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }

        return () => {
            document.body.classList.remove('modal-open');
        }

    },[isMenuShowing]);

    return (
        <SmallStyled className='Small'>
            <SiteLogo />

            <Hamburger toggleMenu={toggleMenu} />

            {isMenuShowing && (
                <nav className="mainMenu">
                    <NavLink onClick={ hideMenu } to={'/'} end>
                        Home
                    </NavLink>
                    <NavLink onClick={ hideMenu } to={'/staff'}>Staff</NavLink>
                    <NavLink onClick={ hideMenu } to={'/contact'}>Contact</NavLink>
                    <NavLink onClick={ hideMenu } to={'/course-work'}>Course</NavLink>
                </nav>
            )}
        </SmallStyled>
    );
}

export default Small;

const SmallStyled = styled.div`
    color: #fff;

    display: flex;
    justify-content: center;

    .SiteLogo {
        height: 300px;
        padding: 20px;
        max-width: 330px;
    }

    .mainMenu {
        position: fixed;

        left: 0px;
        top: 300px;
        right: 0px;
        bottom: 0px;

        background-color: #034444;

        a {
            display: block;

            padding: 10px;
            border-bottom: 1px solid #999999;

            color: #fff;
            text-decoration: none;

            &:hover,
            &:active,
            &:focus {
                background-color: #043434;
            }
        }
    }
`;