import React from 'react';
// import Footer from './Footer';
// import Navbar from './Navbar';
// import MainContent from './MainContent';
// import Product from './Product'
import MemeGenenrator from './MemeGenenrator'
import Navbar from './Navbar'



//class App(React.Componet):と同じ
//you can't React.Component() if you don't have any props
function App() {
  return (
    <div>
    <Navbar />
    <MemeGenenrator />
    </div>
  )
}


  //     // setStateはconstructorで定義されていない。
  //   //だから本来使えないが、それをthis.handleClickと
  //   //同義ですよとここでbindしている。
  //   this.handleClick = this.handleClick.bind(this)
  // }
    // handleClick(id) {
    //   // setState is essential to change the state
    //   // state is like const. we can't change it
    //   // this.state = prevState in this.setState
    //   // this is loop
    //   this.setState(prevState => {
    //     const updatedTodo = prevState.todos.map(todo => {
    //       if (todo.id === id) {
    //         todo.completed = !todo.completed
    //     }
    //       return todo
    //     })
    //     return {todos: updatedTodo}
    //   })
    //   }

   // eslint-disable-next-line
//function App() {
//   //product is new variable
//   //ProductData is row information and go through map, App return () and finally Product.js
//   const todo_data = TodoData.map(todo => <Todo key={todo.id} name={todo.name} deadline={todo.deadline} />
//   )
//   //new is used when you create new instance


//   // when you style JSX, you need to do it as Javascript and dict-shape
//   // one{} means that you use Javascript
//   //the second{} is for dict-shape(object)
//   return (
//     <div className="App">
//       {todo_data}
//     </div>
//   );
// }

export default App;

// const style1 = {
//   color:'purple',
//   backgroundColor:'yellow'}
//   const date = new Date()
//   const hours = date.getHours()
//   let Timeday
//   if (hours < 12) {
//     Timeday = 'morning'
//     style1.font = '20px'
//   } else {
//     Timeday = 'night'
//     style1.font = '30px'
//   }

/* <h1 style={{color: "pink"}}>{'good' + Timeday}</h1>
<h2 style={style1}>Hello world</h2> */



/* <Navbar />
<MainContent />
<Footer />
 */