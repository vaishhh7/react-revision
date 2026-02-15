/*function mainContainer(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)

}
*/

function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children // the text inside the tag
    for (const prop in reactElement.props) {
        if (prop === 'children') {
            continue
        }
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}
/*
this basically gives you <a href ="" target="">
click me to visit google
</a>
*/


const reactElement = { // this is a variable storing an object,this object reperesnts a ui element like html tag
    type: 'a', // this means the html tag we are using is anchor tag so react creates <a></a>
    props: { // are properties passed from parent to child they include html tags like href id target class
        href: "https://google.com",
        target: '_blank' // this tells browser to open the link in a new tab
    },
    children: 'click me to visist google'
}


// so this wouldve been like <a href ="https://google.com"  target="_blank">
// click me to visit google-- so basically children is the <buttton>click me </button> so the click me text is the children
// </a>

const mainContainer = document.querySelector('#root')

// querySelector helps us find the html element that has root value that is div here.

customRender(reactElement, mainContainer)
// call the function customrender and show the reactElement and show it at the mainContainer 