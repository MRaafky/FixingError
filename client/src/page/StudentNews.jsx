import React, { useState, useEffect } from "react";
import axios from "axios";

function StudentNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/StudentNews`)
      .then((res) => setNews(res.data))
      .catch((error) => console.error(error));
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div>
      <div className="flex flex-row w-[auto] h-[auto] overflow-x-scroll">
        {news.map((item, index) => (
          <li
            key={index}
            className="flex flex-row w-[500px] shrink-[0]"
            style={{ cursor: "pointer" }}
          >
            <img src={item.gambar} className="w-[100px] h-[100px]" alt="news" />
            <div>
              <h3 className="text-[20px]">{item.judul}</h3>
              <p>{item.kategori}</p>
              <p>{item.tanggal}</p>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default StudentNews;
