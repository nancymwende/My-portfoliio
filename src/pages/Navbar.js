import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    display:flex;
    justify-content:space-around;
`

const Navbar = () => {
    return (
        <div>
            <Nav className='nav'>
                <div className='left'>
                    <a href='.'><span>My.</span>Portfolio</a>
                </div>
                <div className='right'>
                    <a href='.'>Home</a>
                    <a href='.'>About</a>
                    <a href='.'>Resume</a>
                    <a href='.'>Portfolio</a>
                    <a href='.'>Contact</a>

                </div>
            </Nav>
        </div>
    );
}

export default Navbar;
