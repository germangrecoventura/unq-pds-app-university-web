import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Teacher.css";

export default function GetAllTeachers() {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        API.getAllTeachers().then(response => setTeachers(response.data));
    }, []);

    return (
        <div>
            {teachers.length !== 0 ?
            <table className="TableGetAll">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                    </tr>
                    {teachers.sort(function(a, b) {return a.id - b.id}) && teachers.map(teacher => (
                        <tr key ={teacher.id}>
                            <td>{teacher.id}</td>
                            <td>{teacher.firstName}</td>
                            <td>{teacher.lastName}</td>
                            <td>{teacher.email}</td>
                        </tr>
                    ))}
                </thead>
            </table>
            : <h4>There is no teachers in Academic Management Module</h4>}
        </div>
    )
}