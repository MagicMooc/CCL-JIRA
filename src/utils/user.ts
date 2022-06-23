import { useHttp } from "utils/http";
import { useEffect } from "react";
import { cleanObject } from "utils";
import { useAsync } from "./use-async";
import { User } from "../types/user";
export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();
  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param]);
  return result;
};
