import Teams from "../components/Teams";
import TeamMembers from "../components/TeamMembers";

const Employees = ({ employees, selectedTeam, teamSelector, cardClick }) => {
  return (
    <main className="container custom-margin">
      <div className="row justify-content-center mb-4">
        <div className="col-6">
          <Teams selectedTeam={selectedTeam} teamSelector={teamSelector} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="card-collection">
            <TeamMembers
              employees={employees}
              cardClick={cardClick}
              selectedTeam={selectedTeam}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
