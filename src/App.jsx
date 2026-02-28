import {BrowserRouter, Route, Router, Routes} from 'react-router'
import { AddBlog } from './components/addBlog'

function App() {

  return (
    <>

  <BrowserRouter>
    <Routes>
      <Route index element={<AddBlog/>}></Route>
    </Routes>
  </BrowserRouter>
    
    </>
  )
}

export default App