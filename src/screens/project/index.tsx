import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { BoardScreen } from "screens/board";
import { EpicScreen } from "screens/epic";
export const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      <Link to={"board"}>看板</Link>
      <Link to={"epic"}>任务组</Link>
      <Routes>
        <Route path={"/board"} element={<BoardScreen />}></Route>
        <Route path={"/epic"} element={<EpicScreen />}></Route>
        <Route
          path="*"
          element={
            <Navigate to={window.location.pathname + "/board"} replace={true} />
          }
        />
      </Routes>
    </div>
  );
};
