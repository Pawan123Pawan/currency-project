import { useEffect, useState } from "react";
import DashboardTable from "./Table";
import useContextApi from "./ContextApi";

export default function Dashboard() {
  const [input, setInput] = useState("");
  const [data, setData] = useContextApi();
  function handleChange(e) {
    setInput(e.target.value);
    const filter = data.filter((data) =>
      data.code.toLowerCase().includes(e.target.value.toLowerCase().trim())
    );
    setData(filter);
  }
  function SortData() {
    const sort = data?.sort((a, b) => b.rate_float - a.rate_float);
    setData(sort.slice());
  }
  return (
    <div>
      <div className="navbar">
        <h1 className="title-heading">Currency List</h1>
        <div className="rightdiv">
          <div className="inputdiv">
            <input
              value={input}
              type="text"
              placeholder="Search here..."
              onChange={handleChange}
            />
          </div>
          <button className="mybutton" onClick={SortData}>
            Short
          </button>
        </div>
      </div>
      <div className="tablediv">
        <DashboardTable />
      </div>
    </div>
  );
}
