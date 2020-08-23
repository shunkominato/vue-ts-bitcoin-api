import { Module } from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

type state = {
    // 最大部数
    BTCUSD: string
    BTCGBP: string
    BTCEUR: string
}
export const state = (): state => ({
    // 最大部数
    BTCUSD: '0',
    BTCGBP: '0',
    BTCEUR: '0',
})

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
} as Module<any, any>
