import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLinks/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export function Navbar({ className }: NavbarProps) {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links} />
        </div>
    );
}
