import { useEffect, useState } from "react";
import API from "../../services/API";
import "./GetAll.css";

export default function GetAllMatters() {
    const [matters, setMatters] = useState(null);

    useEffect(() => {
        API.getAllMatters().then(response => setMatters(response.data))
    }, []);

    return (
        <div>
            <table className="TableGetAll">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                    {matters && matters.map(matter => (
                        <tr key ={matter.name}>
                            <td>{matter.name}</td>
                        </tr>
                    ))}
                </thead>
            </table>
        </div>
    )
}