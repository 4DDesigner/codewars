function defineSuit(card) {
    const suits = {
        '♣': 'clubs',
        '♦': 'diamonds',
        '♥': 'hearts',
        '♠': 'spades'
    }
    const suit = [...card].reverse()[0]
    return suits[suit]
}