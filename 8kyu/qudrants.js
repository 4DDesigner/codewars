function quadrant(x, y) {
    // Poveli!
    const diagram = [
        [2, 1],
        [3, 4]
    ]

    const axisY = y > 0 ? 0 : 1
    const axisX = x > 0 ? 1 : 0


    return diagram[axisY][axisX]
}