import male from "../images/male.png";
import female from "../images/female.png";

const TeamMemberCard = ({ employee, cardClick, selectedTeam }) => {
  return (
    <div
      key={employee.id}
      id={employee.id}
      className={
        employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2"
      }
      style={{ cursor: "pointer" }}
      onClick={cardClick}
    >
      {employee.gender === "male" ? (
        <img src={male} className="card-img-top" />
      ) : (
        <img src={female} className="card-img-top" />
      )}
      <div className="card-body">
        <h5 className="card-title">{employee.fullName}</h5>
        <p className="card-text">{employee.designation}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
