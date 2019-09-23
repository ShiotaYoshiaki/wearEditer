export function isMobile() {
    if (window.innerWidth < 800) {
        return true;
    } else {
        return false;
    }
}

/**
 * null, undef, 空白をチェック
 * @param {string} value 試行したい値
 */
export function isExpectString(value) {
    if (!value) return false;
    if (value === null) return false;
    if (value === undefined) return false;
    if (value === '') return false;
    return true;
}
