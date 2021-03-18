#### Assignment Objective
>Explain variable Scoping with examples using conditional

##### Introduction

    Each variable has a scope, which is the part of the program in which the variable 
    is visible.For variable defined outside of any function or block, the scope is
    the whole program— we can refer to such variable wherever we want. These
    are called __global__.
    But variable created for function parameters or declared inside a function
    can be referenced only in that function, so they are known as local variable.

    Variable declared with let and const are in fact local to the block that they
    are declared in, so if you create one of those inside of a loop, the code before and
    after the loop cannot “see” it

 **Examples**
>let numberGoe = 10

> if (true) {

>    let numberZoe = 34

>    var numberRoe = 35

>    console.log(numberGoe + numberZoe + numberRoe)

> }


#### Reference
Eloquent JavaScript

