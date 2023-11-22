import { useState, useEffect } from "react";
import AppTable from "./components/table/table";
import Paginator from "./components/paginator/paginator";
import AppFilter from "./components/app-filter/app-filter";
import {
  buttonsCount,
  nationalities,
  pageResult,
  pagesCount,
} from "./variables/variables";
import { useFetch } from "./hooks/useCacheApi";
import UserModal from "./components/modal/user-modal";
import { IUser } from "./models/user";

function App() {
  const [natFilter, setFilter] = useState<0 | string>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatorStart, setPaginatorStart] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const { cachedUsers, refetch, loading } = useFetch();

  const onUserClick = (user: IUser) => {
    setSelectedUser(user);
    setModalOpen(true);
  };
  const onCloseModal = () => {
    setModalOpen(false);
  };

  const onPortionClick = (forwardClick: boolean) => {
    forwardClick
      ? setPaginatorStart(paginatorStart + buttonsCount)
      : setPaginatorStart(paginatorStart - buttonsCount);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.currentTarget.value);
  };

  const onFilterClick = () => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
    setCurrentPage(1);
    setPaginatorStart(1);
    refetch(natFilter, 1);
  };

  const onPageClick = (page: number) => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
    setCurrentPage(page);
    refetch(natFilter, page);
  };

  useEffect(() => {
    refetch(natFilter, currentPage);
  }, []);
  useEffect(() => {
    console.log(cachedUsers);
  }, [cachedUsers]);
  return (
    <div className="app-wrapper">
      <AppFilter
        filter={natFilter}
        handleFilterChange={handleFilterChange}
        nationalities={nationalities}
        onFilterClick={onFilterClick}
      />
      <AppTable
        loading={loading}
        data={cachedUsers?.get(currentPage)}
        onUserClick={onUserClick}
      />
      <Paginator
        onPortionClick={onPortionClick}
        paginatorStart={paginatorStart}
        onPageClick={onPageClick}
        buttonsCount={pageResult}
        pagesCount={pagesCount}
      />
      {selectedUser && (
        <UserModal
          selectedUser={selectedUser}
          open={modalOpen}
          onClose={onCloseModal}
        />
      )}
    </div>
  );
}

export default App;
