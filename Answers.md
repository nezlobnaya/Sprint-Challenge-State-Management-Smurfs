1. What problem does the context API help solve?

It helps with props drilling and provides a way to share them between components without passing through every level of the tree

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store: a single object that holds the app state data/single source of truth. It is read only. To change it we need to emit/dispatch an action.

Action: an object that tells the reducer how to change the state. It reflects user's action. It contains a `type` property and a `payload`

Reducer: a pure function that takes a current state and an action as  parameters, then it handles the action and produces the next state, merging the action.payload into the new state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is used throughout multiple components,while a Component  state resides in a component it's local to. It does not leave that component. That's way an App state is used in complex setups where data is shared across multiple components(API calls, etc.), while a Component state
is used to handle data which is not shared beyond that component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware that lets action creators return a function instead of an action object to handle to async operations (axios requests, etc)

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like redux, especially with hooks as it provides all tools to build complex applications with awesome UI and experience
