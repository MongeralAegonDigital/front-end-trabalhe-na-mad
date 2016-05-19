
const API = 'https://api.github.com/users';

function getProfile(username) {
  let urlProfile = `${API}/${username}`;

  return function(dispatch){
    fetch(urlProfile)
    .then((res) => res.json() )
    .then((data) => {
      const action = {
        type: 'FETCH_PROFILE',
        profile: data
      };
      dispatch(action);
    })
    .catch((error) => {
      const action = {
        type: 'FETCH_PROFILE',
        profile: []
      };
      dispatch(action);
    });
  };
}

function getRepositories(username) {
  let urlRepositories = `${API}/${username}/repos`;
  let repositories = [];

  return function(dispatch){
    fetch(urlRepositories)
    .then((res) => res.json() )
    .then((data) => {
      data.map(function(item){
        repositories.push({
          name: item.name,
          full_name: item.full_name,
          description: item.description,
          html_url: item.html_url,
          repos: item.repos,
          stargazers_count: item.stargazers_count,
          watchers_count: item.watchers_count,
          forks_count: item.forks_count
        });
      })
      const action = {
        type: 'FETCH_REPOS',
        repositories: repositories
      };
      dispatch(action);
    })
    .catch((error) => {
      const action = {
        type: 'FETCH_REPOS',
        repositories: []
      };
      dispatch(action);
    });
  };
}

export { getProfile as getProfile , getRepositories as getRepositories}
