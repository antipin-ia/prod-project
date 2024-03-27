import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispath = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispath(counterActions.increment());
    };
    const decrement = () => {
        dispath(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-title">
                {counterValue}
            </h1>
            <Button data-testid="increment-btn" onClick={increment}>
                increment
            </Button>
            <Button data-testid="decrement-btn" onClick={decrement}>
                decrement
            </Button>
        </div>
    );
};
