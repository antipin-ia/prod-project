import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
}

describe('getCounter', () => {
    test('should return couner value', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
