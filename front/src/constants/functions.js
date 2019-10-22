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

/**
 * エンター押下時に起動する
 * @param {Function} func 起動したいfunction
 * @param {Array} args 格納したい引数を配列に格納する
 */
export function putEnter(func, args) {
    // args.forEach((arg, index) => {
    //     if()
    // })


}
