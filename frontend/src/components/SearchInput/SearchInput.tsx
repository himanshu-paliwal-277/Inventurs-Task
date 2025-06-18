import React, { memo } from "react";
import styles from "./searchInput.module.css";
import arrowIcon from "../../assets/arrowIcon.jpg";

interface IProps {
  search?: string;
  setSearch?: (search: string) => void;
  sortOrder?: "asc" | "desc";
  setSortOrder?: (order: "asc" | "desc") => void;
}

const SearchInput: React.FC<IProps> = ({
  search,
  setSearch,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          className={styles.input}
          placeholder="Search"
          type="text"
          name="inputField"
          value={search}
          onChange={(e) => {
            if (setSearch) {
              setSearch(e.target.value);
            }
          }}
        />
        <div className={styles.buttonsContainer}>
          {sortOrder === "desc" ? (
            <button
              className={styles.button}
              onClick={() => {
                if (setSortOrder) {
                  setSortOrder(sortOrder === "desc" ? "asc" : "desc");
                }
              }}
            >
              <img
                className={styles.upArrow}
                src={arrowIcon}
                alt="arrow icon"
              />
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={() => {
                if (setSortOrder) {
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                }
              }}
            >
              <img
                className={styles.downArrow}
                src={arrowIcon}
                alt="arrow icon"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(SearchInput);
