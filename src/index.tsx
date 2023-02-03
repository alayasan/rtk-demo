import store from './app/store'
import { cakeActions } from './features/cake/cakeSlice'
import { iceCreamActions } from './features/iceCream/iceCreamSlice'

console.log('Initial state ', store.getState())
const unsubscribe = store.subscribe(() => {})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(3))

store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.ordered())
store.dispatch(iceCreamActions.restocked(3))

unsubscribe()
