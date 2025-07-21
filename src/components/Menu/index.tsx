import {
    SunIcon,
    SettingsIcon,
    HistoryIcon,
    HouseIcon,
    Moon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvaliableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvaliableThemes>(() => {
        const theme = localStorage.getItem('theme') as AvaliableThemes;
        return theme || 'dark';
    });

    const handleTheme = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        event.preventDefault();
        setTheme((prevtheme) => {
            return prevtheme === 'dark' ? 'light' : 'dark';
        });
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const nextTheme = {
        dark: <SunIcon />,
        light: <Moon />,
    };

    return (
        <>
            <nav className={styles.menu}>
                <a
                    href="#"
                    className={styles.menuLink}
                    aria-label="Ir para a home"
                    title="Ir para a home"
                >
                    <HouseIcon />
                </a>

                <a
                    href="#"
                    className={styles.menuLink}
                    aria-label="Ver histórico"
                    title="Ver histórico"
                >
                    <HistoryIcon />
                </a>

                <a
                    href="#"
                    className={styles.menuLink}
                    aria-label="Configurações"
                    title="Configurações"
                >
                    <SettingsIcon />
                </a>

                <a
                    href="#"
                    className={styles.menuLink}
                    aria-label="Mudar tema"
                    title="Mudar tema"
                    onClick={(event) => handleTheme(event)}
                >
                    {nextTheme[theme]}
                </a>
            </nav>
        </>
    );
}
