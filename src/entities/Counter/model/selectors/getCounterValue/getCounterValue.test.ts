import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
}

describe('getCounterValue.test', () => {
    test('', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
