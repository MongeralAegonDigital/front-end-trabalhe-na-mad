
export default function(repositories = null, action) {
  switch (action.type) {
    case 'FETCH_REPOS' : return action.repositories;
  }

  return repositories;
}
