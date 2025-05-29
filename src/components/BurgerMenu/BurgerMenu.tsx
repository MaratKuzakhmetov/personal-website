import { useState, useCallback } from 'react'
import { useTranslation } from 'next-i18next'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './BurgerMenu.module.css'

const menuVariants = {
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

const menuItemVariants = {
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

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useTranslation('common')
    const router = useRouter()

    const languages = [
        { code: 'en', name: 'EN' },
        { code: 'ru', name: 'RU' },
        { code: 'de', name: 'DE' }
    ]

    const handleClose = useCallback(() => {
        setIsOpen(false)
    }, [])

    const handleNavigation = useCallback(async (href: string) => {
        handleClose()
        await router.push(href)
    }, [handleClose, router])

    const changeLanguage = useCallback((lang: string) => {
        handleClose()
        router.push(router.pathname, router.asPath, { locale: lang })
    }, [handleClose, router])

    return (
        <>
            <button className={styles.burgerButton} data-open={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <div />
                <div />
                <div />
            </button>
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        className={styles.menuOverlay}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                    >
                        <motion.div
                            className={styles.menuItem}
                            variants={menuItemVariants}
                            onClick={() => handleNavigation('/')}
                        >
                            <Link href="/" onClick={(e) => e.preventDefault()}>
                                {t('nav.home')}
                            </Link>
                        </motion.div>
                        <motion.div
                            className={styles.menuItem}
                            variants={menuItemVariants}
                            onClick={() => handleNavigation('/about')}
                        >
                            <Link href="/about" onClick={(e) => e.preventDefault()}>
                                {t('nav.about')}
                            </Link>
                        </motion.div>
                        <motion.div
                            className={styles.menuItem}
                            variants={menuItemVariants}
                            onClick={() => handleNavigation('/projects')}
                        >
                            <Link href="/projects" onClick={(e) => e.preventDefault()}>
                                {t('nav.projects')}
                            </Link>
                        </motion.div>
                        <motion.div
                            className={styles.languageControls}
                            variants={menuItemVariants}
                        >
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => changeLanguage(lang.code)}
                                    className={`${styles.languageButton} ${router.locale === lang.code ? styles.active : ''}`}
                                >
                                    {lang.name}
                                </button>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
} 