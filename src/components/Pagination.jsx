export const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <ul className="flex place-content-center text-red-50 space-x-4 p-10">
      {pages.map((page) => (
        <li
          className= {`${currentPage === page && " bg-white rounded-full flex flex-wrap  text-lime-600"}`}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};
