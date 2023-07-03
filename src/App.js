import * as React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Employees from "./pages/Employees";
import NotFound from "./pages/NotFound";
import GroupTeamMembers from "./pages/GroupTeamMembers";
import { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamA"
  );
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employList")) || [
      {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "Backend Developer",
        gender: "male",
        teamName: "TeamB",
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
      },
      {
        id: 9,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamC",
      },
      {
        id: 10,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamD",
      },

      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
      },
      {
        id: 12,
        fullName: "Janice White",
        designation: "Graphic Designer",
        gender: "female",
        teamName: "TeamD",
      },
    ]
  );

  //初次渲染以及每次selectedTeam state改變時就設定localStorage
  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);

  //初次渲染以及每次employees state改變時就設定localStorage
  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);

  //選擇團隊>>>會改變selectedTeam
  function teamSelector(e) {
    setTeam(e.target.value);
  }

  //點選卡片>>>新增或移除成員
  function cardClick(e) {
    //用一變數接收點擊後的結果
    const newEmployees = employees.map((employee) =>
      //針對點選到的成員做比對，其餘維持不變
      employee.id === parseInt(e.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? //展開employee物件，設定teamName屬性
            { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(newEmployees);
  }

  return (
    <Router>
      <Nav />

      <Header
        selectedTeam={selectedTeam}
        teamMemberCount={
          employees.filter((employee) => employee.teamName === selectedTeam)
            .length
        }
      />
      <Routes>
        <Route exact
          path="/#"
          element={
            <Employees
              employees={employees}
              selectedTeam={selectedTeam}
              teamSelector={teamSelector}
              cardClick={cardClick}
            />
          }
        ></Route>

        <Route
          path="/#/GroupTeamMembers"
          element={
            <GroupTeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              setTeam={setTeam}
            />
          }
        ></Route>

        <Route path="/#/*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
