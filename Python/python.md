                                    ## Python Inner Working :

-> Python is an interpreted language, which means that it executes the code line by line.
-> Python Code  ==> ByteCode  ==>  Python Virtual Machine  ==>  Machine Code
        (1)             (2)                  (3)                   (4)

-> Python Code Compiled (Bundled) to ByteCode -> low level and platform independent.
Note :- *ByteCode is not readable by human and is much faster than script code.*

-> .pyc -> compiled python file. (frozen binaries) 
    __pycache__ --> source change (diffing algo to check if the file is changed) and python version.
                --> hello_world.cpython-311.pyc

**PVM (Python Virtual Machine)**
-> loop over code to iterate over the ByteCode and execute it (runtime engine).
-> also known as Python Interpreter.
-> Byte code !== Machine code (machine code directly talks to the hardware(cpu)).

**Data types**:

- Everything in python is an object.


        
                                         ## Immutable and Mutable :
-> Immutable :
        -> Memory ke andar jo reference ban gaya hai vo change ni hoga kabhi. 
        -> int, float, complex, bool, string, tuple, frozenset, bytes.
        -> Once created, the value cannot be changed.
        ex:
        username = "krish" , username = "yadav"         -> new memory allocation. (krish ko replace ni kiya hai, krish to abhi bhi memory me hai.)