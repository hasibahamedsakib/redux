import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementX5,
  decrementX5,
} from "./redux/features/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="grid items-center justify-center h-screen">
      <div className="border rounded-md bg-slate-200 p-20">
        <div className="flex items-center ">
          <button
            onClick={() => dispatch(increment())}
            className="px-4 py-1 text-white bg-green-500 rounded-md"
          >
            Increment
          </button>
          <h1 className="mx-10 text-3xl font-bold text-purple-600">{count}</h1>
          <button
            onClick={() => dispatch(decrement())}
            className="px-4 py-1 text-white bg-red-500 rounded-md"
          >
            Decrement
          </button>
        </div>
        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            onClick={() => dispatch(incrementX5(5))}
            className="px-4 py-1 text-white bg-yellow-500 rounded-md"
          >
            increment 5
          </button>
          <button
            onClick={() => dispatch(decrementX5(5))}
            className="px-4 py-1 text-white bg-violet-500 rounded-md"
          >
            decrement 5
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
