import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = ({ employees, cardClick, selectedTeam }) => {
  return employees.map((employee) => (
    <TeamMemberCard
      employee={employee}
      cardClick={cardClick}
      selectedTeam={selectedTeam}
    />
  ));
};

export default TeamMembers;
