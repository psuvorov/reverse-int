module.exports = function reverse (n) {
  return rev(n);
}

/**
 * 
 * @param {number} n
 */
function rev(n) {
    n = Math.abs(n);
    
    let t = 1;
    let l = 0;
    while (t <= n) {
        l++;
        t *= 10;
    }
    
    let res = 0;
    while (n > 0) {
        let r = n % 10;
        res += r * (10 ** --l);  
        
        n = Math.trunc(n / 10);
    }
    
    return res;
}
