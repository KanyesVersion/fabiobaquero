const AllListSortItem = ({ label, purposeSort, paramSort, paramOrder, changeSortOrder }) => {
    const handleClick = () => {
        changeSortOrder(purposeSort, oppositeOrder);
    }
    const oppositeOrder = paramOrder === 'desc' ? 'asc' : 'desc';

    return (
    <span
        className="select-none cursor-pointer py-2 lg:py-0"
        onClick={handleClick}
    >
        {label + ' '}
        <i
            className="fa fa-chevron-down text-xs lg:text-sm"
            style={{
                transform: paramOrder === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)',
                display: purposeSort === paramSort ? 'inline-block' : 'none'
            }}
            aria-hidden="true"
        ></i>
    </span>
    )
}

export default AllListSortItem