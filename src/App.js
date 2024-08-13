
import React, { useReducer } from 'react';
import UserDetailsForm from './Components/UserDetailsForm';
import UserDetailsTable from './Components/UserDetailsTable';

function App() {
    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            userList: [],
            CurrUserDetails: {},
            actionType: ""
        }
    )
    // Delete user
    const handleDelete = (item) => {
        let userList = state.userList
        let index = userList.findIndex(v => v.username === item.username)
        if (index > -1) {
            userList.splice(index, 1)
            setState({ userList })
        }
    }

    // Edit user
    const handleEdit = (item) => {
        setState({ CurrUserDetails: item, actionType: "Edit" })
    }

    // New user
    const addUserDetails = (newUser) => {
        let userList = state.userList
        userList.push(newUser)
        setState({ userList, actionType: "" })
    };
    return (
        <div className="App">
            <UserDetailsForm
                actionType={state.actionType}
                CurrUserDetails={state.CurrUserDetails}
                addUserDetails={addUserDetails}
                userList={state.userList}
            />
            <UserDetailsTable
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                userList={state.userList}
            />
        </div>
    );
}

export default App;

