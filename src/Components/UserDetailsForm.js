import React, { useEffect, useReducer } from 'react';

const UserDetailsForm = ({ addUserDetails, userList, actionType, CurrUserDetails }) => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      userDetails: {
        username: "",
        email: ""
      },
      userExistError: false,
      InvalidEmailError: false,
    }
  )

  useEffect(() => {
    if (actionType === "Edit") {
      setState({ userDetails: JSON.parse(JSON.stringify(CurrUserDetails)) })
    }
  }, [actionType]);

  const handleChangeInput = (e, name) => {
    let userDetails = state.userDetails
    userDetails[name] = e.target.value
    setState({ userDetails })
  }

  const handleSubmit = () => {
    //Checking if user is existed
    let userExist = userList.filter((v) => v.username === state.userDetails.username)
    if (userExist.length > 0) {
      setState({ userExistError: true })
    } else {
      setState({ InvalidEmailError: false })

      //Email validation with Regular expresion
      const isEmail = /^[a-z0-9.]{1,64}@[a-z0-9.]{1,64}$/i.test(state.userDetails.email);
      if (isEmail) {
        addUserDetails(state.userDetails);
        let userDetails = {
          username: "",
          email: ""
        }
        setState({ userDetails })
      } else {
        setState({ InvalidEmailError: true })
      }
    }
  };
  return (
    <div>
      <div className="userForm">
        <h2>User Details Form</h2>
        <label htmlFor="fname">Username</label>
        <input type="text" value={state.userDetails.username}
          onChange={(e) => handleChangeInput(e, "username")} />

        <label htmlFor="lname">Email</label>
        <input type="text" value={state.userDetails.email}
          onChange={(e) => handleChangeInput(e, "email")} />
        <button onClick={handleSubmit}>Add User</button>
        {state.userExistError && <div>
          <p className="clrRed">Username already existed!</p>
        </div>}
        {state.InvalidEmailError && <div>
          <p className="clrRed">Enter a valid email!</p>
        </div>}
      </div>
    </div>
  );
};

export default UserDetailsForm;
