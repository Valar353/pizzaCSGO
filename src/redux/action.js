import {
    INIT_USER,
    SET_TRADELINK,
    SET_MESSAGE,
    UPDATE_LIST_MESSAGE,
    UPDATE_USER_INVENTORY,
    ADD_VOTING, UPDATE_GAME_LIST, UPDATE_GAME_LIST_AND_BALANCE, CHANGE_OPTION, CLOSE_MODULE
} from "./constant";

export function actionInitUser(user) {
    return {
        type: INIT_USER,
        user
    }
}

export function actionChangeTradeLink(user) {
    return {
        type: SET_TRADELINK,
        user
    }
}

export function actionChangeMessage(myMessage) {
    return {
        type: SET_MESSAGE,
        myMessage
    }
}

export function actionUpdateListMessage(chatList) {
    return {
        type: UPDATE_LIST_MESSAGE,
        chatList
    }
}

export function actionUpdateUserInventory(skins) {
    return {
        type: UPDATE_USER_INVENTORY,
        skins
    }
}

export function actionAddVoting(vote) {
    return {
        type: ADD_VOTING,
        vote
    }
}

export function actionUpdateGameList(currentGames, nextGames) {
    return {
        type: UPDATE_GAME_LIST,
        currentGames,
        nextGames
    }
}

export function actionUpdateGameListAndBalance(games, balance) {
    return {
        type: UPDATE_GAME_LIST_AND_BALANCE,
        games,
        balance
    }
}

export function actionChangeOption(option, state = true) {
    return {
        type: CHANGE_OPTION,
        option,
        state
    }
}

export function actionCloseModule() {
    return {
        type: CLOSE_MODULE,
    }
}
