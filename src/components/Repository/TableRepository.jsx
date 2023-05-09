import "./Repository.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../services/API";

const TableRepository = (props) => {
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    API.getUser()
      .then((response) => {
        setIsStudent(response.data.role === "STUDENT");
      })
      .catch((error) => {
        setIsStudent(false);
      })
      .finally(() => { });
  }, []);

  function branches() {
    return props.repository.branches.map((branch) => (
      <h6 key={branch.id}>
        {branch.name}
      </h6>
    ));
  }

  function commits() {
    return props.repository.commits.map((commit) => (
      <h6 key={commit.nodeId}>
        <Link to={commit.url}>{commit.name}</Link>
      </h6>
    ));
  }

  function issues() {
    return props.repository.issues.map((issue) => (
      <h6 key={issue.id}>
        <Link to={issue.url}>{issue.title}</Link>
      </h6>
    ));
  }

  function issuesStatus() {
    return props.repository.issues.map((issue) => (
      <h6 key={issue.id}>
        {issue.status}
      </h6>
    ));
  }

  function pullRequests() {
    return props.repository.pullRequests.map((pr) => (
      <h6 key={pr.id}>
        <Link to={pr.url}>{pr.title}</Link>
      </h6>
    ));
  }

  function pullRequestsStatus() {
    return props.repository.pullRequests.map((pr) => (
      <h6 key={pr.id}>
        {pr.status}
      </h6>
    ));
  }

  function tags() {
    return props.repository.tags.map((tag) => (
      <h6 key={tag.nodeId}>
        {tag.name} <Link to={tag.zipUrl}>Zip</Link> <Link to={tag.tarUrl}>Tar</Link>
      </h6>
    ));
  }

  return (
    <>
      <table className="TableGet">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Branches</th>
            <th>Commits</th>
            <th>Issues</th>
            <th>Pull requests</th>
            <th>Tags</th>
          </tr>
          <tr>
            <td>{props.repository.id}</td>
            <td><Link to={props.repository.url}>{props.repository.name}</Link></td>
            <td>{props.repository.branches.length}</td>
            <td>{props.repository.commits.length}</td>
            <td>{props.repository.issues.length}</td>
            <td>{props.repository.pullRequests.length}</td>
            <td>{props.repository.tags.length}</td>
          </tr>
        </thead>
      </table>
      {!isStudent && (
        <>
          {props.repository.branches.length > 0 && (
            <table className="TableData">
              <thead>
                <tr>
                  <th>Branches</th>
                </tr>
                <tr>
                  <td>{branches()}</td>
                </tr>
              </thead>
            </table>
          )}
          {props.repository.commits.length > 0 && (
            <table className="TableData">
              <thead>
                <tr>
                  <th>Commits</th>
                </tr>
                <tr>
                  <td>{commits()}</td>
                </tr>
              </thead>
            </table>
          )}
          {props.repository.issues.length > 0 && (
            <table className="TableData">
              <thead>
                <tr>
                  <th>Issues</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>{issues()}</td>
                  <td>{issuesStatus()}</td>
                </tr>
              </thead>
            </table>
          )}
          {props.repository.pullRequests.length > 0 && (
            <table className="TableData">
              <thead>
                <tr>
                  <th>Pull requests</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>{pullRequests()}</td>
                  <td>{pullRequestsStatus()}</td>
                </tr>
              </thead>
            </table>
          )}
          {props.repository.tags.length > 0 && (
            <table className="TableData">
              <thead>
                <tr>
                  <th>Tags</th>
                </tr>
                <tr>
                  <td>{tags()}</td>
                </tr>
              </thead>
            </table>
          )}
        </>
      )}
    </>
  );
};

export default TableRepository;