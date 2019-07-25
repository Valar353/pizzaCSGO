import {initialState} from './Store';
import {
    INIT_USER,
    SET_TRADELINK,
    SET_MESSAGE,
    UPDATE_LIST_MESSAGE,
    UPDATE_USER_INVENTORY,
    ADD_VOTING, UPDATE_GAME_LIST, UPDATE_GAME_LIST_AND_BALANCE, CHANGE_OPTION, CLOSE_MODULE
} from "./constant";

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case INIT_USER:
            return {...state, ...action.user};
        case SET_MESSAGE:
            return {...state, myMessage: action.myMessage};
        case UPDATE_USER_INVENTORY:
            return {
                ...state, user: {
                    ...state.user,
                    userInventory:[
                        ...action.skins
                    ],
                }
            };
        case UPDATE_LIST_MESSAGE:
            return {
                ...state, chatList: [
                    ...action.chatList
                ]
            };
        case ADD_VOTING:
            return {
                ...state
            };
        case UPDATE_GAME_LIST:
            return {
                ...state,
                gameState: [...action.currentGames],
                nextGameState: {
                    length:action.nextGames.length,
                    list: [...action.nextGames]
                },
            };
        case UPDATE_GAME_LIST_AND_BALANCE:
            return {
                ...state,
                gameState: [...action.games],
                user: {...state.user, 'balance': action.balance},
            };
        case SET_TRADELINK:
            return {
                ...state, user: {
                    ...state.user, 'tradeLink': action.user
                }
            };
        case CHANGE_OPTION:
            let options = {...state.options};
            options[action.option] = action.state;
            options['showOverlay'] = true;
            return {
                ...state, options
            };
        case CLOSE_MODULE:
            let opt = state.options;
            for(let key in opt){
                opt[key] = false;
            }
            return {
                ...state, options:{...opt}
            };
        default:
            return state;
    }
}



