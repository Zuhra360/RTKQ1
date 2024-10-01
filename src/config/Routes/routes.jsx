import { createBrowserRouter } from "react-router-dom";
import {  Todo } from "../../components/pages/Todo";
import { Counter } from "../../components/pages/Counter";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Todo/>,
  },
  {
    path: "counter",
    element: <Counter/>,
  },
  
]);