import { Currency } from '06-entities/Currency';
import { Country } from '06-entities/Country';
import type { Profile } from '06-entities/Profile/types/profile.types';
import { TestAsyncThunk } from '07-shared/lib/testsHelpers/TestAsynkThunk';
import { fetchProfile } from './fetchProfile';

const mockedResponse: Profile = {
    username: 'Test',
    first: 'First',
    lastname: 'Last',
    age: 20,
    country: Country.RUS,
    city: 'Moscow',
    currency: Currency.RUB,
    avatar: 'http://image.address',
};

describe('getProfile', () => {
    it('should be return profile', async () => {
        const thunk = new TestAsyncThunk(fetchProfile);

        thunk.api.get.mockReturnValue(Promise.resolve({
            data: mockedResponse,
        }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockedResponse);
    });

    it('should be return profile error', async () => {
        const thunk = new TestAsyncThunk(fetchProfile);

        thunk.api.get.mockReturnValue(Promise.reject());

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('getProfile thunk error');
    });
});
