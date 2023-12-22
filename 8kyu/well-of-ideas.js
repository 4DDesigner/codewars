function well(x){
    let goodIdeaCount = 0;
    for (const idea of x) {
        if (idea === 'good') goodIdeaCount += 1;
    }
    if (goodIdeaCount > 2) return 'I smell a series!' ;
    if (goodIdeaCount > 0) return 'Publish!' ;
    return 'Fail!' ;
}