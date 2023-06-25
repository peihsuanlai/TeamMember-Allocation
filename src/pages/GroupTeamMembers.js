import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  //在首頁調整成員後，成員會被重新分組
  //建立teams陣列，裡面有teamA~teamD物件，並賦予其屬性，回傳後為groupedEmployees的初始值
  function groupTeamMembers() {
    const teams = [];

    const teamAMembers = employees.filter(
      (employee) => employee.teamName === "TeamA"
    );
    const teamA = {
      team: "TeamA",
      members: teamAMembers,
      collapsed: selectedTeam === "TeamA" ? false : true,
    };
    teams.push(teamA);

    const teamBMembers = employees.filter(
      (employee) => employee.teamName === "TeamB"
    );
    const teamB = {
      team: "TeamB",
      members: teamBMembers,
      collapsed: selectedTeam === "TeamB" ? false : true,
    };
    teams.push(teamB);

    const teamCMembers = employees.filter(
      (employee) => employee.teamName === "TeamC"
    );
    const teamC = {
      team: "TeamC",
      members: teamCMembers,
      collapsed: selectedTeam === "TeamC" ? false : true,
    };
    teams.push(teamC);

    const teamDMembers = employees.filter(
      (employee) => employee.teamName === "TeamD"
    );
    const teamD = {
      team: "TeamD",
      members: teamDMembers,
      collapsed: selectedTeam === "TeamD" ? false : true,
    };
    teams.push(teamD);

    return teams;
  }

  //點擊後決定組別物件的 collapse 屬性
  function teamClick(e) {
    const newGroupData = groupedEmployees.map((groupedData) =>
      groupedData.team === e.currentTarget.id
        ? //展開物件，設定collaspe屬性
          { ...groupedData, collapsed: !groupedData.collapsed }
        : groupedData
    );
    setGroupedData(newGroupData);
    setTeam(e.currentTarget.id);
  }

  return (
    <main className="container custom-margin">
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            className="card mt-2 teamSelected"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={teamClick}
            >
              {item.team}
            </h4>

            <div
              id={"collapse_" + item.team}
              className={item.collapsed === true ? "collapse" : ""}
            >
              {item.members.map((member) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">{member.fullName}</span>
                    </h5>
                    <p>{member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};
export default GroupedTeamMembers;
