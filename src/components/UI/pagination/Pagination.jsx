import { getPagesArray } from "../../../utils/pages";

export default function Pagination({totalPages, page, changePage}) {

    let pagesArray = getPagesArray(totalPages);

    return (
        <>
            <div className="page_wrapper">
                {pagesArray.map(p =>
                    <span
                    onClick={() => changePage(p)}
                    className={page === p ? "page_button page_current" : "page_button"}>
                    {p}
                    </span>
                )}
            </div>
        </>
    )
}
