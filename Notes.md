# Notes for Udemy Complete React Developer 2020 (w/ Redux, Hooks, GraphQL)

---

## **Intro to React**

---

---

### **React Basics**

- **React** was created by **Facebook** to create more complex user interfaces with maintainable scalability.
- **React** use **JSX** which is a form of **JavaScript** that injects **HTML** into it.
- **React** is a front-end **JavaScript** framework

---

### **_Create-React-App_**

- Installs **React** and other needed node modules required for **React**.
- _NPM/Yarn_ - start will initiate all the files and configure them into browser friendly files
- _NPM/Yarn_ - build will
- _NPM/YARN_ - eject it will take out all the convenient packages that come with **_Create-React-App_** **!!-- DON'T DO THIS --!!**
- Uses _webpack_ and _babel_
- _Babel_ and _webpack_ allows us to take our src folder:

  1. _babel_ will make sure our **Javascript** files will work on all browsers version.
  2. _webpack_ is a module bundler, it lets us write modular code, take all of our **Javascript** and bundle it together.

- _package.json_ allows us to have a package manager. It allows us to add new dependencies and store the names of the dependencies needed.

---

### **_Imports_**

- **React** allows us to write **JSX**, **HTML**-like-syntax
- **ReactDOM** allows us to interact with the _DOM_ (Document Object Module):

  1. _ReactDOM.render()_ allows us to grab an element of **HTML** and inject our **JSX** into it.

---

### **Life Cycle Method**

- Methods that get called at different stages of when a **component** gets rendered
- _componentDidMount()_ ( mounting is when **React** puts our component on the page)
- When the **component** is rendered to the page for the first time it will call _componentDidMount()_

---

### **_JSX_**

- Can write **functions** that return **HTML**
- Can write **classes** that return **HTML**
- **classes** have more functionality for returning **HTML**

  1. **class** gives access to **state**.
  2. **class** gives access to _setState()_ which takes a functions and allows a state property to be changed.

- **JSX** allows anything written inside {} to be JavaScript, like a template literal.
- {} anything inside here is a **Javascript** expression
- { () => } is an arrow function that can be written inside {}
- _className_ is a **JSX** attribute due to _class_ being something used in **JavaScript**
- uses camel case, **setState()** **renderDOM()**

---

### **Components**

- **Components** are elements from the page broken down to their most refined self
- **Components** are separated into a separate folder to best organize the structure of the project
- Smaller **Components** can be broken down into further directories
- Storing **Component** specific **CSS** is best practice for structuring
- **Components** have **props**
- **props** are parameters that can pass data through **Components**
- **props** have **children**
- **children** are defaulted to null
- to declare a **prop** **children** you write it in between the tags for the **Component**
- the _data_ passed in through **props** can be manipulated through the **Component**
- now the **App** **Component** doesn't have to be responsible for creating all the elements
- **Components** make _testing_ easier
- **React** makes **Components** use _key_ attributes to keep track of individual **Components** and possible changes made

---

### Class Components

- _methods_
- _this_ is a special keyword in **JavaScript** that references the context in which it is being invoked
- **super()** extends the _methods_ from **Component**

---

### **Unidirectional Data Flow**

- **state** can only be modified by calling _setState()_
- as soon as _setState()_ gets called, the method _render()_ will get called again.
- this will re-render the **HTML** with the updated **state**.

---

---

## **SPA (Single Page Application)**

---

---

### **Before SPA**

- Initially all we had to do visit a _link_, the _server_ would respond with the **HTML** **CSS** and **JavaScript** files.
- When you would go to another _link_ the process would have to repeat, performing inefficiently
- Difficult to structure and build large scale projects
- More **static**

### **After SPA**

- Communicates with the **back-end** initially
- When something is click **JavaScript**/**React** will re-render the page with new **state**
- Allows _sign-in_ _sign-out_ more efficient and less work on the **back-end**
- Handles larger scale projects easier
- More **dynamic**
