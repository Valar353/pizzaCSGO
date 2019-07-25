import {createStore} from "redux";
import userReducer from "./reducer";

const initialState = {
        user: {
            // isGuest: true,
            steamID: '76561198119391039',
            id: 283,
            userInventory: [],
            balance: 1231,
            steamImg: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/22/22fd4dfad67f90dd0df902314b0c116ba3aec73b.jpg',
            tradeLink: 'https://steamcommunity.com/tradeoffer/322',
            steamName: 'Valaaaaaaaaaaaaaaaaar355352',
            regDate: '22.04.2019',
            steamGuard: true
        },
        options: {
            showProfile: false,
            showOverlay: false,
        },
        gameState: [

        ],
        myMessage: '',
        chatList:[[]]
    //выводить банеры из state
        // banner: {
        //     nBanner: 0
        // }
    }
;
let store = createStore(userReducer);
export {store, initialState};