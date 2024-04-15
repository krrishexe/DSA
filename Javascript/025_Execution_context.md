## Javascript Execution context :- 'how does code execute in js'

- there are mainly three types of execution contexts.
1). Global Execution Context.
2). Functional Execution Context. 
3). Eval Execution Context.

---------------------------------------------------------------
How does code execute?
---------------------------------------------------------------

First- Memory Creation phase. // **Memory Phase**
Second - Execution Phase.

----------------------------------------------------------------

1.JS creates Global excution context (EveryTime)
2.Next it creates memory phase
3.Memory phase - In this phase,the variables are set to undefined 
  until the execution phase(next phase) and the functions are set to their definitions.
4.Next it creates the execution phase
5.Execution phase - In this phase,the variables are initialsed to given values and 
  when the function s are called,it creates a memory phase and execution phase for the function 
  just like the main one.

For live demo:
browser > inspect > Sources
create a snippet with few functions and visually experience the call stack.