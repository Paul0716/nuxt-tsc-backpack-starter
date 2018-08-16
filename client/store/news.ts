import { Store } from 'vuex'
import { News } from '../models'
import services from '../../helper/services'

interface IState {
    loadedNews: News;
}
class MutationTypes {
    static SET_NEWS = 'setNews'
}

export const state: ()=>IState = () => ({
    loadedNews: new News()
})

export const getters: {[key:string]:(state:IState)=>any} = {
    loadedNews (state) {
        return state.loadedNews || new News()
    }
}

export const actions: {[key:string]:(store: Store<IState>, payload: any)=>void} = {
    async getNews ({ commit }, id) {
        const result = await services.local.getNews({id})
        commit(MutationTypes.SET_NEWS, result)
    }
}

export const mutations: {[key:string]:(state:IState, payload?:any)=>void} = {
    [MutationTypes.SET_NEWS] (state, news: News) {
        state.loadedNews = news
    }
}
