import { useCountryList } from '06-entities/Country/lib/useCounrtyList';
import { Country } from '06-entities/Country/types/country.types';
import { Select } from '07-shared/ui/Select/Select';
import { memo, useCallback } from 'react';

interface CountrySelectorProps {
    disabled?: boolean;
    readOnly?: boolean;
    value: Country;
    label?: string;
    labelPosition?: 'top' | 'left';
    onSelect?: (newValue: Country) => void;
    className?: string;
}

export const CountrySelect = memo(({
    disabled = false,
    readOnly = false,
    value,
    label,
    labelPosition = 'top',
    onSelect,
    className,
}: CountrySelectorProps) => {
    const countries = useCountryList();

    const onSelectHandler = useCallback((newValue: string) => {
        if (onSelect) {
            onSelect(newValue as Country);
        }
    }, []);

    return (
        <Select
            disabled={disabled}
            readOnly={readOnly}
            value={value}
            label={label}
            labelPosition={labelPosition}
            onSelect={onSelectHandler}
            options={countries}
            className={className}
        />
    );
});
