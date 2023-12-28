console.log("Hello")

const myName = "Chrigi"
const h1 = document.querySelector(".heading-primary")

h1.textContent = myName
h1.style.backgroundColor = "green"
h1.style.padding = "5rem"

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div")
  flex.style.display = "flex"
  flex.style.flexdDirection = "column"
  flex.style.rowGap = "1px"

  flex.appendChild(document.createElement("div"))
  flex.appendChild(document.createElement("dix"))

  document.body.appendChild(flex)
  var isSupported = flex.scrollHeight === 1
  flex.parentNode.removeChild(flex)
  console.log(isSupported)

  if (!isSupported) document.body.classList.add("no-flexbox-gap")

  checkFlexGap()
}
