import { TestAsyncThunk } from '07-shared/lib/testsHelpers/TestAsynkThunk';
import type { Profile } from '06-entities/Profile/types/profile.types';
import { getProfile } from './getProfile';

const mockedResponse: Profile = {
    username: 'Test',
    first: 'First',
    lastname: 'Last',
    age: 20,
    country: 'Russia',
    city: 'Moskow',
    currency: 'RUB',
    avatar: 'http://image.address',
};

describe('getProfile', () => {
    it('should be return profile', async () => {
        const thunk = new TestAsyncThunk(getProfile);

        thunk.api.post.mockReturnValue(Promise.resolve({
            data: mockedResponse,
        }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(mockedResponse);
    });

    it('should be return profile error', async () => {
        const thunk = new TestAsyncThunk(getProfile);

        thunk.api.post.mockReturnValue(Promise.reject());

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('getProfile thunk error');
    });
});
