// == Unique keys in lists ==
// Use stable and unique `key` props in list rendering

// == Memoization to prevent unnecessary renders ==
// useCallback,
// useMemo,
// React.memo,

// == Code splitting and lazy loading ==
// React.lazy + Suspense
// dynamic import() (EXAMPLE: LazyLoaderOnClick.jsx)

// == Performance profiling tools ==
// use Profiler
// React DevTools → Profiler tab

// == List virtualization and lazy loading ==
// react-window
// react-virtual
// react-infinite-scroll-component

// == Style optimization ==
// Avoid inline styles and heavy CSS

// == Proper effect cleanup ==
// Always clean up in useEffect to avoid memory leaks
// Keep dependency arrays accurate

import React, {
  Profiler,
  Suspense,
  // useCallback,
  // useMemo,
  // useState,
} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { ThemeDisplay } from "./components/ThemeDisplay";

// import s from "./App.module.css";
// import { useTheme } from "./contexts/theme-context";
// import TaskList from "./components/TaskList";
// import { MemoizedTimer3, Timer3 } from "./components/Timer/Timer";

const renderStats = {};
function onRenderCallback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log(`Profiler [${id}] - ${phase}:`, actualDuration, "ms");

  // 2nd variant
  // if (!renderStats[id]) {
  //   renderStats[id] = {
  //     count: 0,
  //     totalActualTime: 0,
  //     totalBaseTime: 0,
  //   };
  // }

  // renderStats[id].count += 1;
  // renderStats[id].totalActualTime += actualDuration;
  // renderStats[id].totalBaseTime += baseDuration;

  // console.clear();
  // console.table(
  //   Object.entries(renderStats).map(([key, val]) => ({
  //     Component: key,
  //     Renders: val.count,
  //     "Total actual (ms)": val.totalActualTime.toFixed(2),
  //     "Total base (ms)": val.totalBaseTime.toFixed(2),
  //     "Avg per render (ms)": (val.totalActualTime / val.count).toFixed(2),
  //   }))
  // );
}

// import Home from "./components/005-performance/Home";
// import HeavyPage from "./components/005-performance/HeavyPage";
import { LazyLoaderOnClick } from "./components/005-performance/LazyLoaderOnClick";
const Home = React.lazy(() => import("./components/005-performance/Home"));
const HeavyPage = React.lazy(() =>
  import("./components/005-performance/HeavyPage")
);

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/heavy">Heavy Page</Link>
      </nav>
      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <Profiler id="Routes" onRender={onRenderCallback}>
          <Routes>
            <Route
              path="/"
              element={
                // <Profiler id="Home" onRender={onRenderCallback}>
                <Home />
                // </Profiler>
              }
            />
            <Route
              path="/heavy"
              element={
                // <Profiler id="HeavyPage" onRender={onRenderCallback}>
                <HeavyPage />
                // </Profiler>
              }
            />
          </Routes>
          <LazyLoaderOnClick />
        </Profiler>
      </Suspense>
    </Router>
  );
}
