//Función de cadenas de ADN válidas

const isValidDNA = (dnaString) => { // should return true
    const dnaMayus = /^[CTAG]+$/;

    if (dnaString === '' || dnaMayus.test(dnaString)) {
        return false;
    } //should return false due to 'X', to lowercase or for empty string.

    return true
}; 
 module.exports = isValidDNA;