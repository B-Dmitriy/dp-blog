import axios, { AxiosStatic } from 'axios';
import type { Dispatch, AsyncThunkAction } from '@reduxjs/toolkit';
import type { RootState } from '01-app/providers/StoreProvider';

type TestAsyncThunkType<Returned, Arg, Rejected> = (arg: Arg) =>
    AsyncThunkAction<Returned, Arg, { rejectValue: Rejected }>

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Returned, Arg, Rejected> {
    dispatch: Dispatch;

    getState: () => RootState;

    actionCreator: TestAsyncThunkType<Returned, Arg, Rejected>;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    constructor(actionCreator: TestAsyncThunkType<Returned, Arg, Rejected>) {
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.actionCreator = actionCreator;
        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, {
            api: this.api,
            navigate: this.navigate,
        });

        return result;
    }
}
