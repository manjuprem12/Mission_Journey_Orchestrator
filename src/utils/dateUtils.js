export const formatDate = (dateString) => {
    const [year, day, month] = dateString.split('-');
    return `${year}-${month}-${day}`;
};

export const formatDateGrid = (value) => {
    if (value.includes('-')) {
        const [year, day, month] = value.split('-');
        return `${day}/${month}/${year}`;
    } return value;
}

export const formatDateEdit = (value) => {
    const [year, month, day] = value.split('-');
    return `${year}-${day}-${month}`;
}