import type { Dispatch, AsyncThunkAction } from '@reduxjs/toolkit';
import type { RootState } from '01-app/providers/StoreProvider';

type TestAsyncThunkType<Returned, Arg, Rejected> = (arg: Arg) =>
    AsyncThunkAction<Returned, Arg, { rejectValue: Rejected }>

export class TestAsyncThunk<Returned, Arg, Rejected> {
    dispatch: Dispatch;

    getState: () => RootState;

    actionCreator: TestAsyncThunkType<Returned, Arg, Rejected>;

    constructor(actionCreator: TestAsyncThunkType<Returned, Arg, Rejected>) {
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.actionCreator = actionCreator;
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
