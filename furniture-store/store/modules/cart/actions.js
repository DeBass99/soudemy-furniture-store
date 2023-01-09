export const addProduct = ({commit, dispatch}, {product, quantity}) => {
    commit('ADD_TO_CART', {product, quantity});

    dispatch('addNotification', {
        type: "success",
        message: 'Product added to cart'
    }, {root: true})
}

export const removeFromCart = ({commit, dispatch}, product) => {
    commit('REMOVE_FROM_CART', product);

    dispatch('addNotification', {
        type: "warning",
        message: 'Product removed from cart'
    }, {root: true})
}

export const clearCart = ({commit, dispatch}) => {
    commit('CLEAR_ALL_PRODUCTS');

    dispatch('addNotification', {
        type: "danger",
        message: 'Products cleared from cart'
    }, {root: true})
}