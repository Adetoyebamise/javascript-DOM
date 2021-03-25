#### Assignment
>Explain event listener
Event handlers make it possible to detect and react to events happening in our web page. 

The **addEventListener** is a method used to register such a handler. The addEventListener method allows to add any number of handlers so that it is safe to add handlers even if there is already another handler on the element

The **removeEventListener** called with arguments similar to the addEventListener removes a handler

```
<button>Act-once button</button>
<script>
let button = document.querySelector("button");
function once() {
console.log("Done.");
button.removeEventListener("click", once);
}
button.addEventListener("click", once);
</script>
```

Each event has a type ( "keydown" , "focus" , and so on) that identifies it.

An Event listener is a method added to a target, usually an element that listens for a specific event and then calls back a function when that event is detected

**Syntax**
    - <code> target.addEventListener(target callback[,options]);</code>

    where;
    target is the Event target
    addEventListener is the addEventListener Method
    callback is the callback function or function call
    where the properties in the square bracket are typically 'false' or left blank.