import { ReactNode, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

import { LayoutWrapper, Navigation, NavContainer, Logo, NavLinks, NavLink, Controls, LanguageControls, LanguageButton, ThemeButton, Main, MainContent, Footer, FooterText } from './style'

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
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
            <ThemeButton onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? '🌞' : '🌙'}
            </ThemeButton>
        )
    }

    return (
        <LayoutWrapper>
            <Navigation>
                <div className="container">
                    <NavContainer>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Logo href="/">
                                <Image
                                    src="/images/title.jpeg"
                                    alt="Marat Kuzakhmetov"
                                    width={40}
                                    height={40}
                                    className="logo-image"
                                />
                                <span>Marat Kuzakhmetov</span>
                            </Logo>
                            <NavLinks>
                                <NavLink href="/">{t('nav.home')}</NavLink>
                                <NavLink href="/about">{t('nav.about')}</NavLink>
                                <NavLink href="/projects">{t('nav.projects')}</NavLink>
                            </NavLinks>
                        </div>
                        <Controls>
                            <LanguageControls className="language-controls">
                                {languages.map((lang) => (
                                    <LanguageButton
                                        key={lang.code}
                                        onClick={() => changeLanguage(lang.code)}
                                        className={router.locale === lang.code ? 'active' : ''}
                                    >
                                        {lang.name}
                                    </LanguageButton>
                                ))}
                            </LanguageControls>
                            {renderThemeChanger()}
                            <BurgerMenu />
                        </Controls>
                    </NavContainer>
                </div>
            </Navigation>

            <Main>
                <div className="container">
                    <MainContent>{children}</MainContent>
                </div>
            </Main>

            <Footer>
                <div className="container">
                    <FooterText>{t('footer.copyright')}</FooterText>
                </div>
            </Footer>
        </LayoutWrapper>
    )
} 