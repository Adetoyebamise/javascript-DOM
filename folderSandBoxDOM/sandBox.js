const para = document.querySelector('p')

console.log(para)

const para = document.querySelector('error')

console.log(para)

// Grap all Element
 const paras = documaent.querySelector('p')

 console.log(paras);
 
 paras.forEach(para => {
     console.log(paras)
 })

 console.log(paras[2])

const errors = document.querySelectorAll('.error')
console.log(errors)

// get an element by ID
  const title = document.getElementById('page-title')
  console.log(title);

// get an element by Classname
 const errors = document.getElementsByClassName('error')
 console.log(errors)
 console.log(errors[0]) //to get the first error.

// We cant use for each on an HTML COLLECTION

// get an element by tag name
 const paras = documnet.getElementsByTagName('p')
 console.log(paras)


// How to get the inner text inside the p
 const para = documentquerySelector ('')
 console.log(para.innerText) //note that this is a property so no need for parententheses

 para.innerText = ''

// append to the text
 para.innerText += ''

const paras = document.querySelectorAll('p')

// Change text using the for Each

paras.forEach ( para => {
    console.log(para.innerText);
    para.innerText += 'new text'
})

// Change the HTML of something
 const content = document.querySelector('.content')
 console.log(content.innerHTML)

// Updating the content
 content.innerHTML = '<h3>This is a new H3</h3>'
 
// Appending the content
 content.innerHTML += '<h3>This is a new H3 </h3>'

// Output Name of people from a database
 const people = ['Keji','keta','Ekerin']

 people.forEach(persons => {
     content.innerHTML += `<p> ${person}</p>`
 })

 const link = document.querySelector('a')
 console.log(link.getAttribute('href'))
 link.setAttribute('href',  'https://github.com')        //Changing attribute
 link.innerText = ''

 const message = documnet.querySelector('')
 console.log(message.getAttribute(''))
 message.setAttribute('', '')
 message.setAttribute('style', 'color: green')

 const title = document.querySelector('h1')

 title.setAtribute('style', 'margin: 50px;') //complete overwrite

// Using the style property
 console.log(title.style)

 console.log(title.style)
 console.log(title.style.color)

 title.style.margin = '50px'  //this way is better
 title.style.color = 'Marron'
 title.style.fontSize = ''

// Add and remove element from classes
 const content = document.querySelector('p')

 console.log(content.classlist)

 content.classList.add('error')   //adding a class 
 content.classList.remove('error')  //removing a class


// Exercise

 const paras = document.querySelectorAll('')
 paras.forEach(p => {
     console.log(p.textContent)
 })

 const paras = document.querySelectorAll('')
 paras.forEach(p => {
     console.log(p.innerText)
 })

const paras = document.querySelectorAll('')
paras.forEach(p => {
    if(p.textContent.includes('error')) {
     p.classList.add('error')
    }
    if(p.innerText.includes('success')){
     p.classLIst.add('success')
    }
})
// How to toggle class 
 const title = documnet.querySelector('.title')

 title.classList.toggle('test')



