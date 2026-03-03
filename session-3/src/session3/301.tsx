import { useReducer } from "react";
interface Action {
    type: "INCREASE" | "DECREASE";
}
interface State {
    num: number;
    error: string | null;
}
const reducer = (state: State, action: Action) => {
    switch(action.type){
        case "INCREASE":{
            const count = state.num+1;
            const hasError = count > 5 ? "Number cannot be greater than 5" : null;
            return {
                ...state, 
                num: hasError? state.num : count, error: hasError ? hasError : null
            };
        }
        case "DECREASE":{
            const count = state.num-1;
            const hasError = count < 0 ? "Number cannot be less than 0" : null;
            return {
                ...state, 
                num: hasError ? state.num : count,
                error: hasError ? hasError : null
            };
        }
        default:
            return state;
    }
}

const Session3_301 = () => {
    const [state, dispatch] = useReducer(reducer, { num: 0, error: null });
    // const increaseNumber = ():void => {
    //     setNum(num + 1);
    // }
    // const decreaseNumber = (): void => {
    //     setNum(num - 1);
    // }
    const increaseNumber = ():void => {
        dispatch({type: 'INCREASE'})
    }
    const decreaseNumber = (): void => {
        dispatch({type: 'DECREASE'})
    }
    return (
        <div style={{border: "1px solid black", padding: "10px", textAlign: "center", backgroundColor: "lightgray"}}>
            <h1>Session 3 - 301</h1>
            <p>{state.num}</p>
            {state.error && <p>{state.error}</p>}
            
            <div><button style={{backgroundColor: "lightcoral"}} onClick={decreaseNumber}> - </button><button style={{backgroundColor: "lightseagreen"}} onClick={increaseNumber}> + </button></div>

        </div>
    )
}

export default Session3_301;