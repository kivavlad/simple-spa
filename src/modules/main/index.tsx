import {memo, useCallback, useState} from "react";
import {useAppSelector} from "../../hooks/use-selector";
import useTranslate from "../../hooks/use-translate";
import type {IReview} from "../../types/i-review";
import List from "../../components/list";
import ReviewItem from "../../components/review-item";
import Paginate from "../../components/paginate";

const Main: React.FC = () => {
  const {lang, t} = useTranslate();
  const {reviews} = useAppSelector(state => state.reviews);
  const list = reviews[lang];

  // Пагинация
  const [currentPage, setCurrentPage] = useState<number>(Number(localStorage.getItem('currentPage') || 1));
  localStorage.setItem('currentPage', String(currentPage));
  const limit = 10;
  const totalCount = list.length;
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedList = list.slice(startIndex, endIndex);

  const renders = {
    item: useCallback((item: IReview) => {
      return <ReviewItem item={item} t={t}/>
    }, [t])
  }

  return (
    <>
      <List list={paginatedList} renderItems={renders.item}/>
      <Paginate totalCount={totalCount} limit={limit} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default memo(Main);