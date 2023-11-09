import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import { Home, Contact, Github, About, User } from "./components";
import { fetchGithubUser } from "./services/githubUser";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "github",
//         element: <Github />,
//         loader: fetchGithubUser,
//       },
//       {
//         path: "user/:userId",
//         element: <User />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} loader={fetchGithubUser} />
      <Route path="user/:userId" element={<User />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
