import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLinks/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePass } from 'shared/config/routeConfig/RoutConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/Home.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collabsed, setCollabsed] = useState(false);

    const onToggle = () => {
        setCollabsed((prev) => !prev);
    };

    const { t } = useTranslation();

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                styles.Sidebar,
                { [styles.collabsed]: collabsed },
                [className],
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={styles.collabseBtn}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
            >
                {collabsed ? '>' : '<'}
            </Button>
            <div className={styles.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePass.main}
                    className={styles.item}
                >
                    <HomeIcon className={styles.icon} />
                    <span className={styles.link}>{t('Главная')}</span>
                </AppLink>

                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePass.about}
                    className={styles.item}
                >
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher short={collabsed} className={styles.lang} />
            </div>
        </div>
    );
};
