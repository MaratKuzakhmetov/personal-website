import styled from '@emotion/styled'
import Link from 'next/link'


export const LayoutWrapper = styled.div`
    min-height: 100vh;
    background-color: var(--color-background);
    color: var(--color-text);
`

export const Navigation = styled.nav`
    position: fixed;
    width: 100%;
    background-color: var(--color-background);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    z-index: 50;

    [data-theme='dark'] & {
        background-color: var(--color-gray-900);
    }
`

export const NavContainer = styled.div`
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Logo = styled(Link)`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--color-primary);
    transition: color 0.2s;
    font-size: 1rem;

    .logo-image {
        border-radius: 50%;
    }

    @media (max-width: 768px) {        
        .logo-image {
            width: 32px;
            height: 32px;
        }
    }
`

export const NavLinks = styled.div`
    display: none;

    @media (min-width: 769px) {
        display: flex;
        align-items: center;
        margin-left: 1.5rem;
        gap: 2rem;
    }
`

export const NavLink = styled(Link)`
    color: var(--color-text);
    transition: color 0.2s;

    &:hover {
        color: var(--color-primary);
    }
`

export const Controls = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
        .language-controls {
            display: none;
        }
    }
`

export const LanguageButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    transition: all 0.2s;
    border: 2px solid transparent;
    color: var(--color-text);
    
    &:hover {
        background-color: var(--color-gray-100);
    }

    [data-theme='dark'] & {
        &:hover {
            background-color: var(--color-gray-800);
        }
    }

    &.active {
        border-color: var(--color-primary);
        color: var(--color-primary);
    }
`

export const LanguageControls = styled.div`
    display: flex;
    gap: 0.5rem;
`

export const ThemeButton = styled.button`
    padding: 0.5rem;
    border-radius: 0.375rem;
    transition: background-color 0.2s;
    font-size: 1.25rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: var(--color-gray-100);
    }

    [data-theme='dark'] & {
        &:hover {
            background-color: var(--color-gray-800);
        }
    }

    @media (max-width: 768px) {
        width: 2rem;
        height: 2rem;
        padding: 0;
    }
`

export const Main = styled.main`
    padding-top: 4rem;
`

export const MainContent = styled.div`
    padding: 2rem 0;
`

export const Footer = styled.footer`
    background-color: var(--color-background);
    border-top: 1px solid var(--color-gray-200);
    padding: 2rem 0;

    [data-theme='dark'] & {
        background-color: var(--color-gray-900);
        border-color: var(--color-gray-800);
    }
`

export const FooterText = styled.p`
    text-align: center;
    color: var(--color-gray-500);

    [data-theme='dark'] & {
        color: var(--color-gray-400);
    }
`