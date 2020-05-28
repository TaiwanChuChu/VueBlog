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
            state.articles.push(payload);
        },

        updateArt: (state, payload) => {
            if(state.articles[payload.id] === undefined) {
                return false;
            }
            state.articles[payload.id] = payload;
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
            commit('addArt', payload);
        },

        updateArt: ({ commit }, payload) => {
            console.log('updateArt!');
            commit('updateArt', payload);
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
        },
        
        findTgArtByID: (state) => (id) => {
            if(state.articles.length) {
                return state.articles.filter(art => {return art.id === id});
            }
        },
    }
})