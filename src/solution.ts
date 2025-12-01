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

// problem 2
const getLength = (param: string | any[]): number => {
    if (typeof (param) === 'string') {
        return param.length
    } else if (Array.isArray(param)) {
        return param.length;
    }
    else {
        return 0;
    }
}