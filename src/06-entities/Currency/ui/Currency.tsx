import { memo, useCallback } from 'react';
import { Select } from '07-shared/ui/Select/Select';
import { useCurrencyList } from '../lib/useCurrencyList';
import { Currency } from '../types/currency.types';

interface CurrencyProps {
    value: Currency;
    onSelect: (newValue: Currency) => void;
}

export const CurrencySelect = memo(({ value, onSelect }: CurrencyProps) => {
    const currencyList = useCurrencyList();
    const onSelectHandler = useCallback((newValue: string) => {
        onSelect(newValue as Currency);
    }, []);

    return (
        <Select
            value={value}
            options={currencyList}
            onSelect={onSelectHandler}
        />
    );
});
