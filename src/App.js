import { Route, Routes } from "react-router-dom";
import LayoutDefault from "./layouts/LayoutDefault";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import Answers from "./pages/Answers";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./components/PrivateRoute";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home/>}/>
          <Route element={<PrivateRoute />}>
            <Route path="topic" element={<Topic/>}/>
            <Route path="answer" element={<Answers/>}/>
          </Route>
          <Route path="quiz">
            <Route path=":id" element={<Quiz />}/>
          </Route>
          <Route path="result">
            <Route path=":id" element={<Result />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
