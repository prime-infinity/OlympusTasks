import Index from './views/Index'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import  { BreakpointProvider } from 'react-socks';
import Home from './views/Home';

import { useDispatch } from 'react-redux'
import { getInitTasks } from './redux/taskSlice';

const App = () => {

  const dispatch = useDispatch()
  dispatch(getInitTasks())

  return (
    <div className="">
      <BreakpointProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </BreakpointProvider>
    </div>
  )

}
export default App