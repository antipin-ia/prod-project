import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collabsed, setCollabsed] = useState(false);

    const onToggle = () => {
        setCollabsed((prev) => !prev);
    };

    return (
        <div className={classNames(
            styles.Sidebar,
            { [styles.collabsed]: collabsed },
            [className],
        )}
        >
            <button onClick={onToggle}>togle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={styles.lang} />
            </div>
        </div>
    );
};
