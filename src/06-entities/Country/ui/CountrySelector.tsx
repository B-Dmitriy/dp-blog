import { useCountryList } from '06-entities/Country/lib/useCounrtyList';
import { Country } from '06-entities/Country/types/country.types';
import { Select } from '07-shared/ui/Select/Select';
import { memo, useCallback } from 'react';

interface CountrySelectorProps {
    value: Country;
    onSelect: (newValue: Country) => void;
}

export const CountrySelector = memo(({ value, onSelect }: CountrySelectorProps) => {
    const countries = useCountryList();

    const onSelectHandler = useCallback((newValue: string) => {
        onSelect(newValue as Country);
    }, []);

    return (
        <Select
            value={value}
            onSelect={onSelectHandler}
            options={countries}
        />
    );
});
