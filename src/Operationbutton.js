import { ACTION } from './App'
export default function Operationbutton( { dispatch, operation } ) {
    return <button onClick={() => dispatch({ type: ACTION.CHOOSE_OPERATION, payload: {operation} })}>
        { operation }
        </button>
}