import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import '../src/assets/css/index.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index1 from './Pages/Home/Multipage/Home1/Index1';
import Index2 from './Pages/Home/Multipage/Home2/Index2';
import Index3 from './Pages/Home/Multipage/Home3/Index3';
import Index4 from './Pages/Home/Multipage/Home4/Index4';
import Index5 from './Pages/Home/Multipage/Home5/Index5';
import Index6 from './Pages/Home/Multipage/Home6/Index6';
import Index7 from './Pages/Home/Multipage/Home7/Index7';
import Index8 from './Pages/Home/Multipage/Home8/Index8';
import Index9 from './Pages/Home/Multipage/Home9/Index9';
import Index10 from './Pages/Home/Multipage/Home10/Index10';
import Index11 from './Pages/Home/Multipage/Home11/Index11';
import Index12 from './Pages/Home/Multipage/Home12/Index12';
import Index13 from './Pages/Home/Multipage/Home13/Index13';
import Index14 from './Pages/Home/Multipage/Home14/Index14';
import Index15 from './Pages/Home/Multipage/Home15/Index15';

const router = createBrowserRouter([
  { path: "*",  element: <Index1/> },
  { path: "/index-01",  element: <Index1/> },
  { path: "/index-02",  element: <Index2/> },
  { path: "/index-03",  element: <Index3/> },
  { path: "/index-04",  element: <Index4/> },
  { path: "/index-05",  element: <Index5/> },
  { path: "/index-06",  element: <Index6/> },
  { path: "/index-07",  element: <Index7/> },
  { path: "/index-08",  element: <Index8/> },
  { path: "/index-09",  element: <Index9/> },
  { path: "/index-10",  element: <Index10/> },
  { path: "/index-11",  element: <Index11/> },
  { path: "/index-12",  element: <Index12/> },
  { path: "/index-13",  element: <Index13/> },
  { path: "/index-14",  element: <Index14/> },
  { path: "/index-15",  element: <Index15/> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
