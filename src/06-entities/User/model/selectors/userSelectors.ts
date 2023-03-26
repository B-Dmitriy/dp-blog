import { RootState } from '01-app/providers/StoreProvider';

export const getUser = (state: RootState) => state.user.user;
