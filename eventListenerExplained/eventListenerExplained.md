#### Assignment
>Explain event listener
Event handlers make it possible to detect and react to events happening in our web page. 

The **addEventListener** is a method used to register such a handler. The addEventListener method allows to add any number of handlers so that it is safe to add handlers even if there is already another handler on the element

The **removeEventListener** called with arguments similar to the addEventListener removes a handler

<code>
<button>Act-once button</button>
<script>
let button = document.querySelector("button");
function once() {
console.log("Done.");
button.removeEventListener("click", once);
}
button.addEventListener("click", once);
</script>
</code>

Each event has a type ( "keydown" , "focus" , and so on) that identifies it.