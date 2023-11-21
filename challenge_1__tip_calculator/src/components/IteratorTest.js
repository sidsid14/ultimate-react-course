import { useIteratorContext } from "../contexts/IteratorContext";
import { useIterator } from "../hooks/useIterator";

function IteratorTest() {
  //   const [userList, current, loading, next, previous] = useIterator(
  //     "https://randomuser.me/api"
  //   );
  const [userList, current, loading, next, previous] = useIteratorContext();
  return (
    <div>
      <div>
        {" "}
        All users :{" "}
        {userList.map((user) => (
          <div key={user.name.first}>
            <b>
              {user.name.title} {user.name.first} {user.name.last}
            </b>
          </div>
        ))}
      </div>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          Current user:
          {current && (
            <User
              name={current.name.first + " " + current.name.last}
              imgSrc={current.picture.large}
            />
          )}
        </div>
      )}
      <button onClick={next}>Next</button>
      <button onClick={previous}>Previous</button>
    </div>
  );
}

function User({ name, imgSrc }) {
  return (
    <>
      <div>
        <img src={imgSrc} alt="profile" />
      </div>
      <span>{name}</span>
    </>
  );
}

export default IteratorTest;
