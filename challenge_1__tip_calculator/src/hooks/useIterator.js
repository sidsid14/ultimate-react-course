import { useEffect, useState } from "react";

export function useIterator(url) {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(null);

  function next() {
    fetchUsers();
  }

  function previous() {
    const index = userList.findIndex((x) => x === current);
    if (index - 1 > -1) {
      setCurrent(userList.at(index - 1));
    }
  }

  async function fetchUsers() {
    setLoading(true);
    const data = await fetch(url);
    const res = await data.json();

    setUserList((list) => [...list, res.results[0]]);
    setCurrent(res.results[0]);
    setLoading(false);
  }

  useEffect(
    function () {
      fetchUsers();
    },
    [url]
  );
  return [userList, current, loading, next, previous];
}
