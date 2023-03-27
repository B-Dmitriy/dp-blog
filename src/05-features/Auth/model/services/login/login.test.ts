import i18n from 'i18next';
import type { LoginThunk } from '05-features/Auth';
import { User, userActions } from '06-entities/User';
import { TestAsyncThunk } from '07-shared/lib/testsHelpers/TestAsynkThunk';
import { login } from './login';

const user: User = {
    id: 22,
    username: 'user',
    password: '123',
};

describe('login thunk', () => {
    it('should be return user info', async () => {
        const thunk = new TestAsyncThunk<User, LoginThunk, string>(login);

        thunk.api.post.mockReturnValue(Promise.resolve({ data: user }));

        const result = await thunk.callThunk({ username: 'user', password: '123' });

        expect(thunk.dispatch).toBeCalledWith(userActions.setUserData(user));
        expect(thunk.dispatch).toBeCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(user);
    });

    it('should be return error message', async () => {
        const thunk = new TestAsyncThunk<User, LoginThunk, string>(login);

        thunk.api.post.mockReturnValue(Promise.reject());

        const result = await thunk.callThunk({ username: 'user', password: '123' });

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe(i18n.t('auth.incorrect_data_error'));
    });
});
