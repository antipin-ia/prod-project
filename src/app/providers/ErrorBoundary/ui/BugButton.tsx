import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string;
}

// Компонент для теста обработки багов

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const phrow = () => {
        setError(true);
    };

    useEffect(() => {
        if (error) {
            throw Error();
        }
    }, [error]);

    return (
        <Button
            onClick={phrow}
            className={classNames(
                '',
                {},
                [className],
            )}
        >
            {t('throw error')}
        </Button>
    );
};
