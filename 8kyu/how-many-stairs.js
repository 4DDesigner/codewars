function stairsIn20(s){
    return 20 * s.reduce((total, day) => {
        return[...total, ...day]
    }, []).reduce((sum, currentValue) => sum + currentValue)
    //your code here
}