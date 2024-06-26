import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <Input
                autofocus
                placeholder={t('Введите username')}
                type="text"
                className={styles.input}

            />
            <Input
                placeholder={t('Введите пароль')}
                type="text"
                className={styles.input}
            />
            <Button className={styles.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
