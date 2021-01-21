var reducer = function (state = new Map(), action) {

    if (action.type === 'GET_ABOUT') {
        return state.set("about", action.state.about)
    }    
    return state;
}
module.exports = reducer;