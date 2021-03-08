function addZero(n:number) {
    return n < 10 ? n + "0" : n;
}

const getTime = (date:Date) => {
    const d = new Date(date);
    const hour = addZero(d.getHours() > 12 ? d.getHours() - 12 : d.getHours());
    const min = addZero(d.getMinutes());
    const sec = addZero(d.getSeconds());
    return `${hour}:${min}:${sec}`;
}

const ampm = (date:Date) => {
    if (new Date(date).getHours() < 12) return 'am';
    return 'pm';
}

export { getTime, ampm };