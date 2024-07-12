import {memo, useState, useEffect} from 'react';
import styles from "./style.module.css";

interface IProps {
  totalCount: number;
  limit: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<IProps> = ({totalCount, limit, currentPage, setCurrentPage}) => {
  const pageNumbers: number[] = [];
  const [arrOfCurrentPages, setArrOfCurrentPages] = useState<string[] | number[]>([]); // Массив для вывода нужных страниц

  // Определяем количество страниц и добавляем в массив
  for (let i = 1; i < Math.ceil(totalCount / limit) + 1; i++) {
    pageNumbers.push(i);
  }

  // Загрузка выбранной страницы
  function loadPage(page: string | number) {
    if (typeof page === 'number') {
      setCurrentPage(page);
    }
  }

  // Отслеживаем состояние переменной текущей страницы и добавляем в массив нужные страницы
  useEffect(() => {
    let tempNumberOfPages: any[] = [...pageNumbers];

    if (pageNumbers.length > 5) {
      if (currentPage >= 1 && currentPage <= 2) {
        tempNumberOfPages = [1, 2, 3, '...', pageNumbers.length];
      } else if (currentPage === 3) {
        const sliced = pageNumbers.slice(0, 4);
        tempNumberOfPages = [...sliced, '...', pageNumbers.length];
      } else if (currentPage > 3 && currentPage < pageNumbers.length - 2) {
        const sliced1 = pageNumbers.slice(currentPage - 2, currentPage);
        const sliced2 = pageNumbers.slice(currentPage, currentPage + 1);
        tempNumberOfPages = ([1, '...', ...sliced1, ...sliced2, '...', pageNumbers.length])
      } else if (currentPage > pageNumbers.length - 3) {
        const sliced = pageNumbers.slice(pageNumbers.length - 4);
        tempNumberOfPages = ([1, '...', ...sliced]);
      } 
    }
    
    setArrOfCurrentPages(tempNumberOfPages);
  }, [currentPage])

  return (
    <div className={styles.paginate}>
      {arrOfCurrentPages.map((page, index) => {
        return (
          <div key={index} className={currentPage === page ? styles.link_active : styles.link} 
            onClick={() => loadPage(page)}
          >
            {page}
          </div>
        )
      })}
    </div>
  )
}

export default memo(Pagination);