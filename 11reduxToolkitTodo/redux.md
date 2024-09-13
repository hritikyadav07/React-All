redux how to get started

>>1. first we need to create a store 
>> it is created with the help of configure store which only takes object as input i.e.{}

>> 2. Next step is to make reducers(functionality) which are mostly called as slices in redux tkt
>> these are created with the help of createSlice and use nanoid which is used to generate unique id 
>> i. Now we have to first define the initial state of the store which can be an array or an object 
>>ii.now create a slice (bigger version of a reducer ) with createSlice({pbj+props})
>> here provide name of the slice (which will be shown in hrough the extension)
-> property { name: "whatever naem", then initialState, then reducers}
{reducers: {
    <!-- has properties and function -->
    <!--  property then function here --> addTodo: () => {}<!-- can also give refernce here no calling  -->
}}
>> here not only declaration but  defination is written and every function gets access to two values - state, action
>>state - access to the current values of the initialState
>> action - values which come from somwhere 
>> action has a property payload (apne aap me hi obj hai)   

>> after creating all functionalilties export them individualy through slice.actions and recport all reducers also like this export <<<default todoSlice.reducer>>>
>> now update the store with reducers by putting through key:value

>> after this any component can take access of state
>>then on the element get access through useDispatch from react-redux<addTodo.jsx> and of a reducers wihch will be used here 
>> by dispatching a value (dipatcher reducers ka use krte hue store me changes krta hai) syntax: dispatch(reducer(value{which will go to action.payload }))

>> to get all values from the store use -useSelector()
>>iske andr hme state ka access milta hai callback ke andar
>> ek variable banake usae Selector use krke satate ki value le lo then we can use all values through this variable 