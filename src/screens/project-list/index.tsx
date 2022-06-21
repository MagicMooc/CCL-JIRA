import { useEffect, useState } from "react";
import { cleanObject, useDebounce } from "utils";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useMount } from "../../utils/index";
import { useHttp } from "utils/http";
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });

  const debouncedParam = useDebounce(param, 2000);

  const [users, setUsers] = useState([]);

  const [list, setList] = useState([]);
  const client = useHttp();
  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
