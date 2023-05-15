import "./Repository.css";
import { useEffect, useState } from "react";
import API from "../../services/API";
import { Link } from "react-router-dom";

const GetRepositoryPaginated = (props) => {
  const [isStudent, setIsStudent] = useState(false);
  const [pageCommitActual, setPageCommitActual] = useState(null);
  const [numberPageCommitActual, setNumberPageCommitActual] = useState(0);
  const [numberPagesCommit, setNumberPagesCommit] = useState(null);

  const [pageIssueActual, setPageIssueActual] = useState(null);
  const [numberPageIssueActual, setNumberPageIssueActual] = useState(0);
  const [numberPagesIssue, setNumberPagesIssue] = useState(null);

  const [pagePullRequestActual, setPagePullRequestActual] = useState(null);
  const [numberPagePullRequestActual, setNumberPagePullRequestActual] =
    useState(0);
  const [numberPagesPullRequest, setNumberPagesPullRequest] = useState(null);
  const sizePage = 5;

  useEffect(() => {
    API.getUser().then((response) => {
      setIsStudent(response.data.role === "STUDENT");
    });
  }, []);

  useEffect(() => {
    API.getLengthPagesPaginatedCommit(props.repository.name, sizePage).then(
      (response) => setNumberPagesCommit(response.data)
    );
    API.getPaginatedCommit(
      props.repository.name,
      numberPageCommitActual,
      sizePage
    ).then((response) => {
      setPageCommitActual(response.data);
    });
  }, [pageCommitActual, numberPageCommitActual, props.repository.name]);

  useEffect(() => {
    API.getLengthPagesPaginatedIssue(props.repository.name, sizePage).then(
      (response) => setNumberPagesIssue(response.data)
    );
    API.getPaginatedIssue(
      props.repository.name,
      numberPageIssueActual,
      sizePage
    ).then((response) => {
      setPageIssueActual(response.data);
    });
  }, [pageIssueActual, numberPageIssueActual, props.repository.name]);

  useEffect(() => {
    API.getLengthPagesPaginatedPullRequest(
      props.repository.name,
      sizePage
    ).then((response) => setNumberPagesPullRequest(response.data));
    API.getPaginatedPullRequest(
      props.repository.name,
      numberPagePullRequestActual,
      sizePage
    ).then((response) => {
      setPagePullRequestActual(response.data);
    });
  }, [pagePullRequestActual, numberPagePullRequestActual, props.repository.name]);

  function branches() {
    return props.repository.branches.map((branch) => (
      <h6 key={branch.id}>{branch.name}</h6>
    ));
  }

  function commits() {
    return (
      pageCommitActual &&
      pageCommitActual.map((commit) => (
        <h6 key={commit.nodeId}>
          <Link to={commit.url}>{commit.name}</Link>
        </h6>
      ))
    );
  }

  function issues() {
    return (
      pageIssueActual &&
      pageIssueActual.map((issue) => (
        <h6 key={issue.id}>
          <Link to={issue.url}>{issue.title}</Link>
        </h6>
      ))
    );
  }

  function issuesStatus() {
    return (
      pageIssueActual &&
      pageIssueActual.map((issue) => (
        <h6 key={issue.id}>{issue.status}</h6>
      ))
    );
  }

  function pullRequests() {
    return (
      pagePullRequestActual &&
      pagePullRequestActual.map((pr) => (
        <h6 key={pr.id}>
          <Link to={pr.url}>{pr.title}</Link>
        </h6>
      ))
    );
  }

  function pullRequestsStatus() {
    return (
      pagePullRequestActual &&
      pagePullRequestActual.map((pr) => (
        <h6 key={pr.id}>{pr.status}</h6>
      ))
    );
  }

  function tags() {
    return props.repository.tags.map((tag) => (
      <h6 key={tag.nodeId}>
        {tag.name} <Link to={tag.zipUrl}>Zip</Link>{" "}
        <Link to={tag.tarUrl}>Tar</Link>
      </h6>
    ));
  }

  function comments() {
    return props.repository.commentsTeacher.map((comment) => (
      <h6 key={comment.id}>{comment.comment}</h6>
    ));
  }

  const getPagesCommit = () => {
    let list = [];
    for (let step = 0; step < numberPagesCommit; step++) {
      list.push(
        <li class="page-item">
          <a
            class="page-link pointer"
            onClick={() => setNumberPageCommitActual(step)}
          >
            {step}
          </a>
        </li>
      );
    }
    return list;
  };

  const getPagesIssue = () => {
    let list = [];
    for (let step = 0; step < numberPagesIssue; step++) {
      list.push(
        <li class="page-item">
          <a
            class="page-link pointer"
            onClick={() => setNumberPageIssueActual(step)}
          >
            {step}
          </a>
        </li>
      );
    }
    return list;
  };

  const getPagesPullRequest = () => {
    let list = [];
    for (let step = 0; step < numberPagesPullRequest; step++) {
      list.push(
        <li class="page-item">
          <a
            class="page-link pointer"
            onClick={() => setNumberPagePullRequestActual(step)}
          >
            {step}
          </a>
        </li>
      );
    }
    return list;
  };

  return (
    <div className="container clearfix">
      <div className="row buttons">
        {!isStudent && (
          <>
            {props.repository.branches.length > 0 && (
              <div className="col-md-2 text-center">
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#branch"
                  aria-expanded="false"
                  aria-controls="branch"
                >
                  Branches
                </button>
              </div>
            )}
            {props.repository.commits.length > 0 && (
              <div className="col-md-2 text-center">
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#commit"
                  aria-expanded="false"
                  aria-controls="commit"
                >
                  Commits
                </button>
              </div>
            )}
            {props.repository.issues.length > 0 && (
              <div className="col-md-2 text-center">
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#issue"
                  aria-expanded="false"
                  aria-controls="issue"
                >
                  Issues
                </button>
              </div>
            )}
            {props.repository.pullRequests.length > 0 && (
              <div className="col-md-2 text-center">
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#pullRequest"
                  aria-expanded="false"
                  aria-controls="pullRequest"
                >
                  Pull Requests
                </button>
              </div>
            )}
            {props.repository.tags.length > 0 && (
              <div className="col-md-2 text-center">
                <button
                  class="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#tag"
                  aria-expanded="false"
                  aria-controls="tag"
                >
                  Tags
                </button>
              </div>
            )}
          </>
        )}
        {props.repository.commentsTeacher.length > 0 && (
          <div className="col-md-2 text-center">
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#comments"
              aria-expanded="false"
              aria-controls="comments"
            >
              Comments
            </button>
          </div>
        )}
      </div>
      {props.repository.branches.length > 0 && (
        <div class="collapse" id="branch">
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
        </div>
      )}

      {props.repository.commits.length > 0 && (
        <div class="collapse" id="commit">
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
          {numberPagesCommit > 1 && (
            <nav aria-label="Page navigation example">
              <ul class="pagination">{getPagesCommit().map((index) => index)}</ul>
            </nav>
          )}
        </div>
      )}

      {props.repository.issues.length >= 0 && (
        <div class="collapse" id="issue">
          <table className="TableData">
            <thead>
              <tr>
                <th>Issues</th>
                <th style={{"width":"60px"}}>Status</th>
              </tr>
              <tr>
                <td>{issues()}</td>
                <td>{issuesStatus()}</td>
              </tr>
            </thead>
          </table>
          {numberPagesIssue > 1 && (
            <nav aria-label="Page navigation example">
              <ul class="pagination">{getPagesIssue().map((index) => index)}</ul>
            </nav>
          )}
        </div>
      )}

      {props.repository.pullRequests.length > 0 && (
        <div class="collapse" id="pullRequest">
          <table className="TableData">
            <thead>
              <tr>
                <th>Pull requests</th>
                <th style={{"width":"60px"}}>Status</th>
              </tr>
              <tr>
                <td>{pullRequests()}</td>
                <td>{pullRequestsStatus()}</td>
              </tr>
            </thead>
          </table>
          {numberPagesPullRequest > 1 && (
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                {getPagesPullRequest().map((index) => index)}
              </ul>
            </nav>
          )}
        </div>
      )}

      {props.repository.tags.length > 0 && (
        <div class="collapse" id="tag">
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
        </div>
      )}

      {props.repository.commentsTeacher.length > 0 && (
        <div class="collapse" id="comments">
          <table className="TableData">
            <thead>
              <tr>
                <th>Comments</th>
              </tr>
              <tr>
                <td>{comments()}</td>
              </tr>
            </thead>
          </table>
        </div>
      )}
    </div>
  );
};

export default GetRepositoryPaginated;
