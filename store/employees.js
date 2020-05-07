export const state = () => ({
    list: []
})

export const getters =
{
    employeesList: (state) => {
        var employeesList = state.employees.map(employee => {
            return {
                id: employee.id,
                name: employee.name,
                surname: employee.surname
            };
        });
        return employeesList
    }
}

export const mutations = {
    get_employees(state, data) {
        state.list = data;
    },
    updateMessage(state, name) {
        state.list.name = name
    },
    update_Name(state, payload) {
        state.list.forEach(element => {
            if (element.id === payload.idEmployeeAttuale)
                element.name = payload.nomeDaAggiornare
        });
    },
    update_Surname(state, payload) {
        state.list.forEach(element => {
            if (element.id === payload.idEmployeeAttuale)
                element.surname = payload.cognomeDaAggiornare
        });
    },
    update_Age(state, payload) {
        state.list.forEach(element => {
            if (element.id === payload.idEmployeeAttuale)
                element.age = payload.ageDaAggiornare
        });
    }
}

export const actions = {
    popolaStore({ commit }, employees) {
        commit('get_employees', employees)
    },
    updateName({ commit }, payload) {
        commit('update_Name', payload)
    },
    updateSurname({ commit }, payload) {
        commit('update_Surname', payload)
    },
    updateAge({ commit }, payload) {
        commit('update_Age', payload)
    }
}