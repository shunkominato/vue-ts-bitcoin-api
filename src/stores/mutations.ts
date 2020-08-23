// mutations
export default {
    /**
     * @param state
     * @param payload
     */
    initBTC(state: object, payload: string): void {
        state.BTCUSD = payload
        state.BTCGBP = payload
        state.BTCEUR = payload
    },
    setBTCUSD(state: object, payload: string): void {
        state.BTCUSD = payload
    },
    setBTCGBP(state: object, payload: string): void {
        state.BTCGBP = payload
    },
    setBTCEUR(state: object, payload: string): void {
        state.BTCEUR = payload
    },
}
