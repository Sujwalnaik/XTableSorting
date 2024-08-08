import { useState } from "react";
import "./App.css";

function App() {
  const [tableData, setTableData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" },
    { date: "2020-09-06", views: 200, article: "Article 4" },
  ]);

  const handleSortByDate = () => {
    setTableData((prevData) =>
      [...prevData].sort((a, b) => {
        if (new Date(b.date) - new Date(a.date) === 0) {
          return b.views - a.views;
        } else {
          return new Date(b.date) - new Date(a.date);
        }
      })
    );
  };
  const handleSortByViews = () => {
    setTableData((prevData) =>
      [...prevData].sort((a, b) => {
        if (b.views - a.views === 0) {
          return b.date - a.date;
        } else {
          return b.views - a.views;
        }
      })
    );
  };

  return (
    <>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={handleSortByDate}>Sort by Date</button>
        <button onClick={handleSortByViews}>Sort by Views</button>
      </div>
      <table>
        <tr>
          <th>Date</th>
          <th>Views</th>
          <th>Article</th>
        </tr>
        {tableData.map((ele, ind) => (
          // eslint-disable-next-line react/jsx-key
          <tr key={ind}>
            <td>{ele.date}</td>
            <td>{ele.views}</td>
            <td>{ele.article}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default App;
