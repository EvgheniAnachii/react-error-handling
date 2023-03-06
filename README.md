# react-error-handling
In `MyComponent` we use try/catch when component is being rendered and inside this try/catch we
update the state of the component which is not allowed, actually.
So, do not update component state while component is being rendered.
This is because this component falls into infinite loop of renderers.