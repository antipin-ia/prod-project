import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLinks/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';


interface NavbarProps {
    className?: string;
}

export function Navbar({className}: NavbarProps) {
  return (
    <div className={classNames(styles.Navbar ,{}, [className])}>
      <div className={styles.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={styles.mainLink}>Главная</AppLink> 
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
      </div>
    </div>
  )
}

