import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        account: 'LWJ',
        articles: [],
        searchArt: '',
    },
    mutations: {
        fetchArticles: (state, payload) => {
            state.articles = payload;
        },

        setSearchArt: (state, payload) => {
            state.searchArt = payload;
        },

        addArt: (state, payload) => {
            console.log(payload);
            state.articles.push(payload);
        }
    },
    actions: {
        fetchArticles: async ({ commit }) => {
            const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article';
            const result = await axios.get(api);
            const payload = result.data.data;
            commit('fetchArticles', payload);
        },

        setSearchArt: ({ commit }, payload) => {
            commit('setSearchArt', payload);
        },

        addArt: ({ commit }, payload) => {
            console.log('actions!');
            commit('addArt', payload);
        },
    },
    getters: {
        filterByArtID: (state) => {
            if(state.articles.length) {
                if(state.searchArt === '') {
                    return state.articles;
                }
                return state.articles.filter(art => {return art.title.indexOf(state.searchArt) > -1});
            }
        }
    }
})