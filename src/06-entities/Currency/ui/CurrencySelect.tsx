import { memo, useCallback } from 'react';
import { Select } from '07-shared/ui/Select/Select';
import { useCurrencyList } from '../lib/useCurrencyList';
import { Currency } from '../types/currency.types';

interface CurrencyProps {
    value: Currency;
    label?: string;
    labelPosition?: 'top' | 'left';
    onSelect: (newValue: Currency) => void;
    className?: string;
}

export const CurrencySelect = memo(({
    value,
    label,
    labelPosition = 'top',
    onSelect,
    className,
}: CurrencyProps) => {
    const currencyList = useCurrencyList();
    const onSelectHandler = useCallback((newValue: string) => {
        onSelect(newValue as Currency);
    }, []);

    return (
        <Select
            value={value}
            label={label}
            labelPosition={labelPosition}
            options={currencyList}
            onSelect={onSelectHandler}
            className={className}
        />
    );
});
