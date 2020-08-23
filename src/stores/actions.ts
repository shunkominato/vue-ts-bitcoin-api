import asyncRequest from './services/asyncRequest'

// actions
export default {
    getBTC: ({ commit }: { commit: void }): Promise<object> => {
        return new Promise<object>((resolve: () => void, reject: () => void) => {
            const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
            asyncRequest(url)
                .then((res: object) => {
                    console.log('----------Axios Success----------')
                    commit('setBTCUSD', res.data.bpi.USD.rate)
                    commit('setBTCGBP', res.data.bpi.GBP.rate)
                    commit('setBTCEUR', res.data.bpi.EUR.rate)
                    resolve()
                })
                .catch((err: any) => {
                    console.log('----------Axios Err----------')
                    console.log(err)
                    reject()
                })
        })
    },
}
