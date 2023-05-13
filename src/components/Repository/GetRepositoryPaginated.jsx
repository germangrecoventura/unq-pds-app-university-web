import { useEffect, useState } from "react";
import API from "../../services/API";
import { Link } from "react-router-dom";

const GetRepositoryPaginated = () => {
  const [user, setUser] = useState(null);
  const [pageCommit, setPageCommit] = useState(null);
  const sizePage = 5;
  const [actualPage, setActualPage] = useState(0);
  const [numberPages, setNumberPages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    API.getUser().then((response) => {
      setUser(response.data);
    });
  }, []);

  useEffect(() => {
    API.getLengthPagesPaginatedCommit(
      "unq-pds-app-university-api",
      sizePage
    ).then((response) => setNumberPages(response.data));
    API.getPaginatedCommit(
      "unq-pds-app-university-api",
      actualPage,
      sizePage
    ).then((response) => {
      setPageCommit(response.data);
    });
  }, [pageCommit]);

  function commits() {
    return (
      pageCommit &&
      pageCommit.content.map((commit) => (
        <h6 key={commit.nodeId}>
          <Link to={commit.url}>{commit.name}</Link>
        </h6>
      ))
    );
  }

  const getPages = () => {
    let list = [];
    for (let step = 0; step < numberPages; step++) {
      list.push(
        <li class="page-item">
          <a class="page-link pointer" onClick={() => setActualPage(step)}>
            {step}
          </a>
        </li>
      );
    }
    return list;
  };

  return (
    <div className="container clearfix">
      <p>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Commits
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        {isLoading && (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
        {!isLoading && (
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

        <nav aria-label="Page navigation example">
          <ul class="pagination">{getPages().map((index) => index)}</ul>
        </nav>
      </div>
      {/*    {page && page.content.length} */}
    </div>
  );
};

export default GetRepositoryPaginated;
