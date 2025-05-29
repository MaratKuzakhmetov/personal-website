import { ReactNode, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { BurgerMenu } from '../BurgerMenu'
import styles from './Layout.module.css'

interface LayoutProps {
    children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const router = useRouter()
    const { t } = useTranslation('common')

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), [])

    const languages = [
        { code: 'en', name: 'EN' },
        { code: 'ru', name: 'RU' },
        { code: 'de', name: 'DE' }
    ]

    const changeLanguage = (lang: string) => {
        router.push(router.pathname, router.asPath, { locale: lang })
    }

    const renderThemeChanger = () => {
        if (!mounted) return null

        return (
            <button 
                className={styles.themeButton}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'dark' ? '🌞' : '🌙'}
            </button>
        )
    }

    return (
        <div className={styles.layoutWrapper}>
            <nav className={styles.navigation}>
                <div className="container">
                    <div className={styles.navContainer}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Link href="/" className={styles.logo}>
                                <Image
                                    src="/images/title.jpeg"
                                    alt="Marat Kuzakhmetov"
                                    width={40}
                                    height={40}
                                    className={styles.logoImage}
                                />
                                <span>Marat Kuzakhmetov</span>
                            </Link>
                            <div className={styles.navLinks}>
                                <Link href="/" className={styles.navLink}>{t('nav.home')}</Link>
                                <Link href="/about" className={styles.navLink}>{t('nav.about')}</Link>
                                <Link href="/projects" className={styles.navLink}>{t('nav.projects')}</Link>
                            </div>
                        </div>
                        <div className={styles.controls}>
                            <div className={`${styles.languageControls} language-controls`}>
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        className={`${styles.languageButton} ${router.locale === lang.code ? styles.active : ''}`}
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                            {renderThemeChanger()}
                            <BurgerMenu />
                        </div>
                    </div>
                </div>
            </nav>

            <main className={styles.main}>
                <div className="container">
                    <div className={styles.mainContent}>{children}</div>
                </div>
            </main>

            <footer className={styles.footer}>
                <div className="container">
                    <p className={styles.footerText}>{t('footer.copyright')}</p>
                </div>
            </footer>
        </div>
    )
} 