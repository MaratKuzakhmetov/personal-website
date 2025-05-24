import styled from '@emotion/styled'
import { motion } from 'framer-motion'


export const BurgerButton = styled.button`
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
        outline: none;
    }

    @media (max-width: 768px) {
        display: flex;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background: var(--color-text);
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        &:first-of-type {
            transform: ${({ isOpen }) =>
                isOpen ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-of-type(2) {
            opacity: ${({ isOpen }) =>
                isOpen ? '0' : '1'};
            transform: ${({ isOpen }) =>
                isOpen ? 'translateX(20px)' : 'translateX(0)'};
        }

        &:nth-of-type(3) {
            transform: ${({ isOpen }) =>
                isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`

export const MenuOverlay = styled(motion.div)`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-background);
    z-index: 9;
    padding: 5rem 2rem;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const MenuItem = styled(motion.div)`
    margin: 1rem 0;
    font-size: 1.5rem;
    color: var(--color-text);

    a {
        text-decoration: none;
        color: inherit;
        
        &:hover {
            color: var(--color-primary);
        }
    }
`

export const LanguageControls = styled(motion.div)`
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
`

export const LanguageButton = styled.button`
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-size: 1rem;
    transition: all 0.2s;
    border: 2px solid transparent;
    color: var(--color-text);
    
    &:hover {
        background-color: var(--color-gray-100);
    }

    &.active {
        border-color: var(--color-primary);
        color: var(--color-primary);
    }
`

export const menuVariants = {
    closed: {
        x: '100%',
        opacity: 0,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
            when: 'afterChildren'
        }
    },
    open: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 30,
            when: 'beforeChildren',
            staggerChildren: 0.1
        }
    }
}

export const menuItemVariants = {
    closed: {
        y: 20,
        opacity: 0,
        transition: {
            duration: 0.2
        }
    },
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.2
        }
    }
}