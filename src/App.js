import Index from './views/Index'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './views/Home';

const App = () => {

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}
export default App