function findLineByLeastSquares(values_x: number[], values_y: number[]): number[] {
    let sum_x = 0
    let sum_y = 0
    let sum_xy = 0
    let sum_xx = 0
    let count = 0
    /** We'll use those variables for faster read/write access. */
    let x = 0
    let y = 0
    let values_length = values_x.length
    //  throw new Error('The parameters values_x and values_y need to have same size!');
    if (values_length != values_y.length) {
        
    }
    
    /** Nothing to do. */
    if (values_length == 0) {
        return [0, 0]
    }
    
    /** Calculate the sum for each of the parts necessary. */
    for (let v = 0; v < values_length; v++) {
        x = values_x[v]
        y = values_y[v]
        sum_x += x
        sum_y += y
        sum_xx += x * x
        sum_xy += x * y
        count += 1
    }
    /** 
    
    Calculate m and b for the formular:
    y = x * m + b
    
    
 */
    let m = (count * sum_xy - sum_x * sum_y) / (count * sum_xx - sum_x * sum_x)
    let b = sum_y / count - m * sum_x / count
    /** We will make the x and y result line now */
    /** 
    result_values_x = []
    result_values_y = []
    for w in range(values_length):
        x = values_x[w]
        y = x * m + b
        result_values_x.append(x)
        result_values_y.append(y)
    
 */
    // return [result_values_x, result_values_y]
    return [m, b]
}

let vx = [3, 5, 8]
let vy = [4, 5, 9]
let r = findLineByLeastSquares(vx, vy)
console.log(r[0])
console.log(r[1])
