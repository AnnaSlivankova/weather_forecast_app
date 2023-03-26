type SearchStatusType = {
    searchStatus: boolean
}
type ActionsType = ReturnType<typeof setSearchStatus>


const initialState: SearchStatusType = {
    searchStatus: true
}

export const SearchReducer = (state: SearchStatusType = initialState, action: ActionsType): SearchStatusType => {
    switch (action.type) {
        case "SET-SEARCH-STATUS":
            return {...state, searchStatus: action.searchStatus}

        default:
            return state
    }
}

export const setSearchStatus = (searchStatus: boolean) => {
    return {type: 'SET-SEARCH-STATUS', searchStatus} as const
}