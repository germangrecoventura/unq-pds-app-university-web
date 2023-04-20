import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Student.css";

export default function GetAllStudents() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        API.getAllStudents().then(response => setStudents(response.data));
    }, []);

    return (
        <div>
            {students.length !== 0 ?
            <table className="TableGetAll">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Repositories</th>
                    </tr>
                    {students.sort(function(a, b) {return a.id - b.id}) && students.map(student => (
                        <tr key ={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>{student.repositories}</td>
                        </tr>
                    ))}
                </thead>
            </table>
            : <h4>There is no students in Academic Management Module</h4>}
        </div>
    )
}