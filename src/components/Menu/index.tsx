import { SunIcon, SettingsIcon, HistoryIcon, HouseIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type AvaliableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvaliableThemes>('dark');

    const handleTheme = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', nextTheme);
            return nextTheme;
        });
        
    }
    
    return (
        <>
        {theme}
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
                    <SunIcon />
                </a>
            </nav>
        </>
    );
}
