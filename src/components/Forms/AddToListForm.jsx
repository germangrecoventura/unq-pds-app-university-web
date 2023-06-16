import React from "react";
import API from "../../services/API";
import { useState, useEffect } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import "../Buttons/ButtonsStyles.css";
import AddToListButton from "../Buttons/AddToListButton";

const AddToListForm = (props) => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    switch (props.entityB) {
      case "Student":
        API.getAllStudents().then((response) => setListItems(response.data));
        break;
      case "Teacher":
        API.getAllTeachers().then((response) => setListItems(response.data));
        break;
      default:
        API.getAllGroups().then((response) => setListItems(response.data));
        break;
    }
  }, [props.entityB]);

  const isInList = (entityId) => {
    return props.listOfEntities?.some((entity) => entity.id === entityId);
  };

  function listItemsView() {
    return listItems.map((item) => (
      <tr key={item.id}>
        <td className="data-list">
          {props.entityB !== "Group" ? (
            <p className="text">
              {item.firstName} {item.lastName}
            </p>
          ) : (
            <p className="text">{item.name}</p>
          )}
          {isInList(item.id) ? (
            "Added"
          ) : (
            <AddToListButton
              entityA={props.entityA}
              entityB={props.entityB}
              idEntityA={props.idEntityA}
              idEntityB={item.id}
              formErrors={props.formErrors}
            />
          )}
        </td>
      </tr>
    ));
  }

  return (
    <div>
      {listItems.length > 0 && (
        <div>
          {props.entityA === "Group" ? (
            <button
              type="button"
              className="btn btn-success"
              data-bs-toggle="collapse"
              data-bs-target={"#" + props.entityB}
              aria-expanded="false"
              aria-controls={props.entityB}
            >
              Add members
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-success"
              data-bs-toggle="collapse"
              data-bs-target={"#" + props.entityB}
              aria-expanded="false"
              aria-controls={props.entityB}
            >
              Add {props.entityB.toLowerCase()}s
            </button>
          )}
          <div className="collapse" id={props.entityB}>
            <MDBTable className="text-table table-success" responsive="md" hover>
              <MDBTableHead>
                <tr>
                  {props.entityA === "Group" ? (
                    <th scope="col">Members to add</th>
                  ) : (
                    <th scope="col">{props.entityB}s to add</th>
                  )}
                </tr>
              </MDBTableHead>
              <MDBTableBody>{listItemsView()}</MDBTableBody>
            </MDBTable>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToListForm;
