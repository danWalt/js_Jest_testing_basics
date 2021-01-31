const capitalize = (str) => {
    if (str.length === 0){
        return ''
    }
    const aux = str.toLowerCase();
    return aux.charAt(0).toUpperCase() + aux.slice(1);
}

module.exports = capitalize;