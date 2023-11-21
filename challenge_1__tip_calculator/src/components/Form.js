import { useReducer, useRef } from "react";

const initialState = {
  username: "",
  fullname: "",
  age: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "submit":
      return { ...action.payload };
    default:
      return new Error("Unknown action type");
  }
}

function Form() {
  const [{ username, fullname, age }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function handleSubmit(e) {
    e.preventDefault();
    const { username, fullname, age } = e.target.elements;

    console.log(username.value, fullname.value, age.value);
    dispatch({
      type: "submit",
      payload: {
        username: username.value,
        fullname: fullname.value,
        age: age.value,
      },
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>FullName</label>
          <input type="text" name="fullname" />
        </div>
        <div>
          <label>Age</label>
          <input type="number" name="age" />
        </div>

        <button type="submit">Submit</button>
      </form>
      {username !== "" && (
        <div>
          <h1>Request sent to DB with below request data</h1>
          <ul>
            <li>Username: {username}</li>
            <li>FullName: {fullname}</li>
            <li>Age: {age}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Form;
