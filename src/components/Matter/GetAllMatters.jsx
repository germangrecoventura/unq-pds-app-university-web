import { useEffect, useState } from "react";
import API from "../../services/API";
import "./Matter.css";

export default function GetAllMatters() {
    const [matters, setMatters] = useState([]);

    useEffect(() => {
        API.getAllMatters().then(response => setMatters(response.data));
    }, []);

    return (
        <div>
            {matters.length !== 0 ?
            <table className="TableGetAll">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                    {matters.sort(function(a, b) {return a.id - b.id}) && matters.map(matter => (
                        <tr key ={matter.id}>
                            <td>{matter.id}</td>
                            <td>{matter.name}</td>
                        </tr>
                    ))}
                </thead>
            </table>
            : <h4>There is no matters in Academic Management Module</h4>}
        </div>
    )
}