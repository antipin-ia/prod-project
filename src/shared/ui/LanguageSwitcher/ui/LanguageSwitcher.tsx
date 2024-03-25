import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
    short?: boolean
}

export const LanguageSwitcher = ({ className, short }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toogle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (

        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toogle}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};
