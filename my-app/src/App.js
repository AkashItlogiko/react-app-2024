// import List from './components/UniqueList/List';

const users = [
  {
    fullName: 'Akash saha',
    age: 26,
    phones: [{ home: '017458744' }, { office: '014458744' }],
  },
  {
    fullName: 'Riya Goush',
    age: 22,
    phones: [{ home: '0174585460' }, { office: '0150987442' }],
  },
];

export default function App() {
  return (
    <div>
      <h1>Nasted Lists</h1>
      {users.map((user, index) => (
        <article key={index}>
          <h3>{user.fullName}</h3>
          <p>{user.age}</p>
          {user.phones.map((phone, index) => (
            <div key={index}>
              <p>{phone.home}</p>
              <p>{phone.office}</p>
            </div>
          ))}
        </article>
      ))}
    </div>
  );
}
