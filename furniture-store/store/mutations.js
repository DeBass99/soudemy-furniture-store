export const PUSH_NOTIFICATION = (state, notification) => {
    state.notifications.push({
    ...notification,
    id: (Math.random().toString(36) + Date.now(36)).substring(2)
    })
}

export const CLEAR_NOTIFICATION = (state,notificationToRemove) => {
    state.notifications = state.notifications.filter(notification => {
        return notification.id != notificationToRemove.id;
    })
}