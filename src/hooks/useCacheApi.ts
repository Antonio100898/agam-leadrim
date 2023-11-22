import { useCallback, useState } from "react";
import { IUser } from "../models/user";
import { api } from "../api/api";
import { pageResult } from "../variables/variables";

export const useFetch = () => {
  const [cachedUsers, setChachedUsers] = useState<Map<number, IUser[]>>(
    new Map()
  );
  const [cachedFilter, setCachedFilter] = useState<0 | string>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUsers = useCallback(
    async (natFilter: 0 | string, page: number, newFilter?: boolean) => {
      try {
        const response = await api.getUsers(
          natFilter === 0 //if no nat filter - call api without nat filter
            ? `?page=${page}&results=${pageResult}`
            : `?page=${page}&results=${pageResult}&nat=${natFilter}`
        );
        if (newFilter) {
          //if nat filter has been changed we want to reset cached users by deleting data and setting users only with provided nat
          const emptyMap = new Map();
          setChachedUsers(new Map(emptyMap.set(page, response?.data.results)));
        } else {
          // if nat filter nas not been changed we want to add fetched array of users into our state
          setChachedUsers(
            new Map(cachedUsers.set(page, response?.data.results))
          );
        }
      } catch (error) {
        console.error(error);
      }
    },
    [cachedUsers]
  );

  const refetch = useCallback(
    (natFilter: 0 | string, page: number) => {
      if (cachedFilter !== natFilter) {
        setLoading(true);
        fetchUsers(natFilter, 1, true);
        setCachedFilter(natFilter);
        setLoading(false);
      } else {
        if (!cachedUsers.get(page)) {
          // only if current page with the same filter NOT already cached in the state we will call the api
          setLoading(true);
          fetchUsers(natFilter, page);
          setLoading(false);
        }
      }
    },
    [fetchUsers, cachedFilter, cachedUsers]
  );

  return { cachedUsers, refetch, loading };
};
