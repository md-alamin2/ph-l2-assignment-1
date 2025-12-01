// problem-1
const formatValue = (param: string | number | boolean): string | number | boolean => {
    if (typeof (param) === 'string') {
        return param.toUpperCase();
    } else if (typeof (param) === 'number') {
        return param * 10;
    } else {
        return !param
    }

}