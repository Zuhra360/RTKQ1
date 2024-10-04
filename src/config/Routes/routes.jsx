import { createBrowserRouter } from "react-router-dom";
import { TanStack } from "../../components/pages/tanStack";
import { CartPage} from "../../components/pages/CartPage";
import { UserPage } from "../../components/pages/UserPage";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <TanStack/>,
  },
  {
    path: "cart",
    element: < CartPage/>
  },
  {
    path: "users",
    element: < UserPage/>
  }
  
]);