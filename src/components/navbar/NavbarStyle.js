import styled, { keyframes } from 'styled-Components'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const expandHeight = keyframes`
    from {
        height: 0;
        padding: 0;
    }
    to {
        height: auto;
        padding: 1rem 5%;
    }
`

export const collapseHeight = keyframes`
    from {
        height: auto;
        padding: 1rem 5%;
    }
    to {
        height: 0;
        padding: 0;
    }
`

export const Nav = styled.nav`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    background-color: #CC9C51;
    padding: .5rem 5%;
    font-family: 'Cairo';
`

export const NavLinks = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: row-reverse;
    align-items: center;
`

export const Fig = styled.figure`
    width: 6rem;
    margin: 0;
`

export const Logo = styled.img`
    width: 100%;
    object-fit: cover;
`

export const WrapperLinks = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    flex-direction: row-reverse;

    @media screen and (max-width:1024px) {
        display: none;
    }
`

export const Link = styled(AnchorLink)``

export const LinkBtn = styled.button`
    background: transparent;
    border: 0;
    outline: none;
    color: #fff;
    font-size: 1rem;
    position: relative;
    cursor: pointer;
    font-family: 'Cairo';

    &::after {
        position: absolute;
        left: 0;
        bottom: -5px;
        content: '';
        width: 90%;
        height: 2.5px;
        background-color: #fff;
        opacity: 0;
        transition: all .2s ease-in-out;
        transform: translateX(8%);
        pointer-events: none;
    }

    &:hover::after, &:focus::after {
        opacity: 1;
    }
`

export const SearchBar = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: 1rem;
    align-items: center;
    background: #fff;
    border-radius: 999px;
    padding: 0.3rem 0.5rem;

    @media screen and (max-width:1024px) {
        display: none;
    }

    &.search-mobile {
        display: flex;
        padding: 0.8rem;
        border-radius: 6px;
        margin: 1rem 0px;
    }
`

export const SearchInput = styled.input`
    background: transparent;
    border: 0;
    outline: 0;
    text-align: end;
    flex: 1;
`

export const SearchIcon = styled.div`
    display: flex;
    align-items: center;
`

export const MobileIcon = styled.button`
    color: #fff;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;

    @media screen and (min-width: 1025px) {
        display: none;
    }
`

export const MobileBox = styled.div`
    background: #CC9C51;
    box-shadow: 0 0 10px rgba(0,0,0,.17);
    padding: 1rem 5%;
    animation: ${({ isToggle }) => (isToggle ? expandHeight : collapseHeight)} .5s ease forwards;

    @media screen and (min-width:1025px) {
        display: none;
    }
`

export const MobileLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 1rem;
    animation: ${({ isToggle }) => (isToggle ? expandHeight : collapseHeight)} .1s ease forwards;

    & ${LinkBtn} {
        position: ${({ isToggle }) => (isToggle ? 'relative' : 'initial')};
    }
`