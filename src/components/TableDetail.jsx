import React, { useState, useEffect } from "react";
import ReactDOM  from "react-dom";
import Topthree from "./Topthree";

const TableDetail = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);
//  const [leaderboardcopyData, setLeaderboardcopyData] = useState(leaderboardData);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedManager, setSelectedManager] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
      // Fetch data from the API route on the backend
      fetch('/check')
        .then((response) => response.json())
        .then((data) => setLeaderboardData(data))
        .catch((error) => console.error('Error fetching data:', error));
        //setLeaderboardcopyData(leaderboardData);
    }, []);
   
    const handleSelectMonth = (event) => {
      setSelectedMonth(event.target.value);
    };
    
    
  const handleSelectDepartment = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleSelectManager = (event) => {
    setSelectedManager(event.target.value);
  };

  
  const handleSelectYear = (event) => {
    setSelectedYear(event.target.value);
  };

    useEffect(() => {
      // Combine the filtering conditions for department,month,manager and year
      const filteredData = leaderboardData.filter((item) => {
        const matchDepartment = selectedDepartment ? item.Department.trim() === selectedDepartment: true;
        const matchMonth = selectedMonth ? item.Month.trim() === selectedMonth : true;
        const matchManager = selectedManager ? item.Manager.trim() === selectedManager : true;
        const matchYear = selectedYear ? item.Year.trim() === selectedYear : true;

        return matchDepartment && matchMonth && matchManager && matchYear;
      });
      setFilteredData(filteredData);
    }, [selectedDepartment, selectedMonth, leaderboardData,selectedManager,selectedYear]);
  
//const uniqueManagers = [...new Set(filteredData.map((item) => item.Manager))];
//setManagers(uniqueManagers);

return (
      <div>
      <Topthree firstThree={filteredData}/>  
      <div className="container mt-4" style={{ height: '325px', overflowY: 'auto' }}>
      <table className="table table-striped table-bordered table-hover custom-table h-100" >
        <thead className="table-dark">
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Employee Name</th>
            <th scope="col">

           <select id="selectDepartment" value={selectedDepartment} onChange={handleSelectDepartment}> 
                    <option value="">ALL Departments</option>
                    <option value="D&AI">D&AI</option>
                    <option value="R&D">R&D</option>
            </select>
            </th>  
          <th scope="col">

          <select id="selectManager" value={selectedManager} onChange={handleSelectManager}> 
                    <option value="">ALL Managers</option>
                    <option value="ABC">ABC</option>
                    <option value="DEF">DEF</option>
                    <option value="JKL">JKL</option>
                    <option value="GHI">GHI</option>
               

        </select>
          </th>
            <th scope="col">Points</th>
            <th scope="col">
            <select id="selectMonth" value={selectedMonth} onChange={handleSelectMonth}>
                    <option value="">All Months</option>
                    <option value="Jan">January</option>
                    <option value="Feb">February</option>
                    <option value="Mar">March</option>
                    <option value="Apr">April</option>
                    <option value="May">May</option>
                    <option value="Jun">June</option>
                    <option value="Jul">July</option>
                    <option value="Aug">August</option>
                    <option value="Sep">September</option>
                    <option value="Oct">October</option>
                    <option value="Nov">November</option>
                    <option value="Dec">December</option>
                    
                    </select>
            </th>
            <th scope="col">

           <select id="selectYear" value={selectedYear} onChange={handleSelectYear}> 
                    <option value="">ALL Years</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
            </select>
            </th>  

          </tr>
        </thead>
        <tbody>
          {filteredData.map((item,index) => (
            <tr key={item.Employee_ID}>
              <td>{index+1}</td> 
              <td>{item.Employee_ID}</td>
              <td>{item.Employee_Name}</td>
              <td>{item.Department}</td>
              <td>{item.Manager}</td>
              <td>{item.Points}</td>
              <td>{item.Month}</td>
              <td>{item.Year}</td>
            </tr>
          ))}
        </tbody>
      </table>
          </div>
          </div>
    );
  };
  
  export default TableDetail;