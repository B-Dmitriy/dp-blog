import { memo, useCallback } from 'react';
import { Select } from '07-shared/ui/Select/Select';
import { useCurrencyList } from '../lib/useCurrencyList';
import { Currency } from '../types/currency.types';

interface CurrencyProps {
    disabled?: boolean;
    readOnly?: boolean;
    value: Currency;
    label?: string;
    labelPosition?: 'top' | 'left';
    onSelect?: (newValue: Currency) => void;
    className?: string;
}

export const CurrencySelect = memo(({
    disabled = false,
    readOnly = false,
    value,
    label,
    labelPosition = 'top',
    onSelect,
    className,
}: CurrencyProps) => {
    const currencyList = useCurrencyList();
    const onSelectHandler = useCallback((newValue: string) => {
        if (onSelect) {
            onSelect(newValue as Currency);
        }
    }, []);

    return (
        <Select
            disabled={disabled}
            readOnly={readOnly}
            value={value}
            label={label}
            labelPosition={labelPosition}
            options={currencyList}
            onSelect={onSelectHandler}
            className={className}
        />
    );
});
