// Examine the Document Model
 
// console.log(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.forms)
// console.log(document.links)
// console.log(document.images)

/* Method to query the DOM 
a. getelementbyid */

//  console.log(document.getElementById('header-title'))
//  var headerTitle = document.getElementById('header-title')
//  console.log(headerTitle)
//  headerTitle.textContent = ""
//  headerTitle.innerText = ""
//  console.log(headerTitle.innerText)
//  headerTitle.innerHTML = '<h3></h3>'
//  header.style.borderBottom = "solid 3px #000"

/* Method to query the DOM
b. getElementbyClassName */
//  var items = document.getElementsByClassName('list-group-item');
//  console.log(items)
//  console.log(items[1]) 
//  items[1].textContent = ""
//  items[1].style.fontWeight = ""
//  items[1].style.backgroundColor = ""

// items.style.backgroundColor = "#f4f4f4"

 for (var i; i < items.length; i++) {
     items[i].style.backgroundColor = '#f4f4f4'
 }

/*c. getElementByTagName */

var li = document.getElementsByTagName('list-group-item')
console.log(li)
console.log(li[1]) 
li[1].textContent = ""
li[1].style.fontWeight = ""
li[1].style.backgroundColor = ""

// items.style.backgroundColor = "#f4f4f4"

for (var i; i < li.length; i++) {
    li[i].style.backgroundColor = '#f4f4f4'
}

/*d. QuerySelector  */

 var header = document.querySelector('#main-header')
 header.style.borderBottom = " solid 4px #ccc"

 var input = document.querySelector( 'input')
 input.value = "Hello World"

 var submit = document.querySelector('input[type="submit"]')
 submit.value="SEND"

 var item = document.querySelector('.list-group-item')
 item.style.color = 'red'

 var lastitem = document.querySelector('.list-group-item : last-child')
 lastitem.style.color = 'blue'

 var secondItem = document.querySelector('.list-group-item : nth-child(2)')
 secondItem.style.color = 'coral'

/*e QuerySSelectorAll */

 var titles = document.querySelectorAll('.title')

 console.log(titles)
 titles[0].textContent = 'Hello'

 var odd = document.querSelectorAll('li:nth-child(odd)')
 var even = document.querSelectorAll('li:nth-child(even)')

 for (var i = 0; i < oddlength; i++) {
     odd[i].style.backgroundColor = '#f4f4f4'
     even[i].style.backgroundColor = '#ccc'
 }

// Tranversing the DOM

 



 