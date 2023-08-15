import { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { Pagination } from "./Pagination";

const INITIAL_PAGE = 1;

const ResidentList = ({ residents, currentLocation }) => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  //show residents per page
  const RESIDENT_PER_PAGE = 20;

  //pages total
  const totalPage = Math.ceil(residents.length / RESIDENT_PER_PAGE);

  //quantity residents pr page
  const sliceStart = (currentPage - 1) * RESIDENT_PER_PAGE;
  const sliceEnd = sliceStart + RESIDENT_PER_PAGE;
  const recidedentPage = residents.slice(sliceStart, sliceEnd);

  //page array that show
  const pages = [];
  for (let x = 1; x <= totalPage; x++) {
    pages.push(x);
  }

  useEffect(() => {
    setCurrentPage(INITIAL_PAGE);
  }, [currentLocation]);

  return (
    <section className="m-5">
      <section className="flex flex-wrap gap-5 place-content-center">
        {recidedentPage.map((resident) => (
          <ResidentCard key={resident} residentUrl={resident} />
        ))}
      </section>
      <Pagination
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};

export default ResidentList;
