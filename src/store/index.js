import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        searchResults: []
    },
    mutations: {
        SET_SEARCH_RESULTS(state, payload) {
            state.searchResults = payload;
        }
    },
    actions: {
        FETCH_SEARCH_DATA({ commit }, query) {
            let url = 'https://en.wikipedia.org/w/api.php';

            let params = {
                action: "query",
                list: "search",
                srsearch: query,
                format: "json"
            };
            
            url = url + "?origin=*";

            Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    commit('SET_SEARCH_RESULTS', data.query.search);
                });
        }
    },
    getters: {
        GET_RESULTS: state => {
            return state.searchResults;
        }
    }
});