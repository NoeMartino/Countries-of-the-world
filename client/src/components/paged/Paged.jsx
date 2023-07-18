import style from "../paged/Paged.module.css";

const Paged = ({ currentPage, countriesPerPage, countries, paged }) => {

    const pageNumbers = []

    for (let i = 0; i < Math.ceil(countries / countriesPerPage); i++) {
        pageNumbers.push(i + 1)
    }

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <nav>
            <ul className={style.list}>
                {currentPage > 1 && (
                    <li>
                        <button className={style.buttonPaged}
                            onClick={() => {
                                paged(currentPage - 1);
                                handleClick()
                            }}>
                            Previous
                        </button>
                    </li>
                )}
                {pageNumbers && pageNumbers.map(number => (
                    <li key={number}>
                        <button className={`${number === currentPage ? style.buttonCurrent : style.buttonPaged}`}
                            onClick={() => { paged(number); handleClick() }}>
                            {number}
                        </button>
                    </li>
                ))}
                {currentPage < pageNumbers.length && (
                    <li>
                        <button
                            className={style.buttonPaged}
                            onClick={() => {
                                paged(currentPage + 1);
                                handleClick()
                            }}>
                            Next
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Paged;