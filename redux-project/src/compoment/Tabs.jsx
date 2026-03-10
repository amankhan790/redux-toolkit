import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const Tabs = ["video", "photos"];
  const dispatch = useDispatch();

  const activeTabs = useSelector((state) => state.search.activeTabs);

  return (
    <div className="mt-10 flex gap-5 justify-center">
      {Tabs.map((tab, id) => {
        return (
          <button
            key={id}
            className={`${activeTabs.includes(tab) ? "bg-blue-700 text-white" : "bg-white text-black"} px-5 py-2 rounded border-2`}
            onClick={() => dispatch(setActiveTabs(tab))}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
