import React, { useEffect, useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
   const [todoList, setTodoList] = useState([
      { id: 1, title: "I love Easy Frontend! 😍 " },
      { id: 2, title: "We love Easy Frontend! 🥰 " },
      { id: 3, title: "They love Easy Frontend! 🚀 " }
   ]);

   const [postList, setPostList] = useState([]);

   // empty dependency: once run on first render
   useEffect(() => {
      async function fetchPostList() {
         try {
            const requestUrl = "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
            const response = await fetch(requestUrl);
            const responseJSON = await response.json();
            console.log("hiendev ~ file: App.js ~ line 22 ~ fetchPostList ~ responseJSON", responseJSON);

            const { data } = responseJSON; // use object destructuring
            setPostList(data);
         } catch (error) {
            console.log("Failed to fecth post list: ", error.message);
         }
      };
      fetchPostList();
   }, []);

   function handleTodoClick(todo) {
      console.log("hiendev ~ file: App.js ~ line 14 ~ handleToDoClick ~ todo", todo);
      const index = todoList.findIndex((x) => x.id === todo.id);
      if (index < 0) return;

      const newTodoList = [...todoList];
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
   }

   function handleTodoFormSubmit(formValues) {
      console.log("Form submit: ", formValues);
      // add new todo to current todo list
      const newTodo = {
         id: todoList.length + 1,
         ...formValues
      };
      console.log("hiendev ~ file: App.js ~ line 31 ~ handleTodoFormSubmit ~ newTodo", newTodo);
      const newTodoList = [...todoList];
      newTodoList.push(newTodo);
      setTodoList(newTodoList);
   }

   return (
      <div className='app'>
         <h1>React hooks - PostList</h1>
         {/* <ColorBox /> */}

         {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
         {/* <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}

         <PostList posts={postList} />
      </div>
   );
}

export default App;
