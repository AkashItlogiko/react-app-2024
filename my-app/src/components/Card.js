const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

// const headingStyle = {
//   backgroundColor: 'purple',
//   color: 'white',
//   textAlign: 'center',
//   padding: '15px',
// };

function Card(props) {
  const { titleText, decsText } = props;
  return (
    <div className="card">
      <h3 className="cardTitle">{titleText}</h3>
      <p className="cardDesc">{decsText}</p>
      <p className="cardFooter">
        {monthName + '/' + dateName + '/' + currentYear}
      </p>
    </div>
  );
}

export default Card;
