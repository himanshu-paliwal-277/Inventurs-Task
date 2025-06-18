import React, { memo, useEffect, useState } from "react";
import styles from "./usersList.module.css";
import axios from "axios";
import SearchInput from "../SearchInput/SearchInput";
import { Pagination } from "@mantine/core";

const pageLimit = 10;

const fetchUsersData = async (
  search: string,
  sortOrder: string,
  page: number
) => {
  const response = await axios.get("http://localhost:4000/api/users", {
    params: { search, sortOrder, page, limit: pageLimit },
  });
  console.log(response.data);
  return response.data;
};

interface User {
  name: string;
}

const UsersList: React.FC = () => {
  const [usersData, setUsersData] = useState<User[]>([]);
  const [search, setSearch] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const handler = setTimeout(() => {
      const fetchData = async () => {
        const data = await fetchUsersData(search, sortOrder, page);
        if (data) {
          setUsersData(data);
        }
      };
      fetchData();
    }, 500);
    console.log("sort order", sortOrder);
    console.log("data length: ", usersData.length);

    return () => {
      clearTimeout(handler);
    };
  }, [search, sortOrder, page]);

  return (
    <>
      <SearchInput
        setSearch={setSearch}
        search={search}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      {usersData.length === 0 ? (
        <div className={styles.notFound}>data not found</div>
      ) : (
        <div className={styles.container}>
          {usersData.map((user, index) => (
            <div key={index ** 2} className={styles.userItem}>
              {page * pageLimit - pageLimit + index + 1}. {user.name}
            </div>
          ))}
        </div>
      )}
      <div className={styles.paginationContainer}>
        <Pagination
          total={usersData.length}
          value={page}
          onChange={setPage}
          mt="sm"
        />
      </div>
    </>
  );
};

export default memo(UsersList);
