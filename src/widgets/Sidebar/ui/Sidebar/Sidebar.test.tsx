import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
// eslint-disable-next-line
import { renderWithTranclation } from 'shared/lib/test/renderWithTranclation/renderWithTranclation';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
    test('Sidebar', () => {
        renderWithTranclation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Sidebar', () => {
        renderWithTranclation(<Sidebar />);
        const togleBtn = screen.getByTestId('sidebar-todle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(togleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collabsed');
    });
});
