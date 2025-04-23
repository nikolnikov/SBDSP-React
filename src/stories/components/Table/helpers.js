export const descendingComparator = (a, b, orderBy) => {
    // Handle nested objects with value property
    const aValue =
        a[orderBy] && typeof a[orderBy] === 'object'
            ? a[orderBy].value
            : a[orderBy];
    const bValue =
        b[orderBy] && typeof b[orderBy] === 'object'
            ? b[orderBy].value
            : b[orderBy];

    if (bValue < aValue) {
        return -1;
    }
    if (bValue > aValue) {
        return 1;
    }
    return 0;
};

export const getComparator = (order, orderBy) => {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
};

export const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
};
