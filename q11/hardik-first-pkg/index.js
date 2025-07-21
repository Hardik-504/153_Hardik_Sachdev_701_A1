class StringUtils {
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static reverse(str) {
        return str.split('').reverse().join('');
    }

    static truncate(str, maxLength) {
        if (str.length > maxLength) {
            return str.slice(0, maxLength - 3) + '...';
        }
        return str;
    }
}

module.exports = StringUtils;