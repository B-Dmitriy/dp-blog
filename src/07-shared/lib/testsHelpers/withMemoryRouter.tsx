import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export const withMemoryRouter = (children: ReactNode, initialEntry: string) => (
    <MemoryRouter initialEntries={[initialEntry]}>
        {children}
    </MemoryRouter>
);
