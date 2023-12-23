function well(x){
    let ideaGoodCount = 0;
    for( const idea of x) {
        if(idea === 'good') ideaGoodCount += 1;
    }
    if (ideaGoodCount == 1) return 'Publish!';
    if (ideaGoodCount == 2) return 'Publish!';
    if (ideaGoodCount >= 3) return 'I smell a series!';
    return 'Fail!';
}