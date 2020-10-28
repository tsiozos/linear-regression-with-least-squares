def findLineByLeastSquares(values_x: List[number], values_y: List[number]):
    sum_x = 0
    sum_y = 0
    sum_xy = 0
    sum_xx = 0
    count = 0
    """
    
    We'll use those variables for faster read/write access.
    
    """
    x = 0
    y = 0
    values_length = len(values_x)
    # throw new Error('The parameters values_x and values_y need to have same size!');
    if values_length != len(values_y):
        pass
    """
    
    Nothing to do.
    
    """
    if values_length == 0:
        return [0, 0]
    """
    
    Calculate the sum for each of the parts necessary.
    
    """
    for v in range(values_length):
        x = values_x[v]
        y = values_y[v]
        sum_x += x
        sum_y += y
        sum_xx += x * x
        sum_xy += x * y
        count += 1
    """
    
    Calculate m and b for the formular:
    y = x * m + b
    
    """
    m = (count * sum_xy - sum_x * sum_y) / (count * sum_xx - sum_x * sum_x)
    b = (sum_y / count) - (m * sum_x) / count
    """
    
    We will make the x and y result line now
    
    """
    """
    result_values_x = []
    result_values_y = []
    for w in range(values_length):
        x = values_x[w]
        y = x * m + b
        result_values_x.append(x)
        result_values_y.append(y)
    """
    #return [result_values_x, result_values_y]
    return [m,b]

vx = [3, 5, 8]
vy = [4, 5, 9]
r = findLineByLeastSquares(vx, vy)
print(r[0])
print(r[1])