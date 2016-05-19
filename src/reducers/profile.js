
export default function(profile = null, action) {
  switch (action.type) {
    case 'FETCH_PROFILE' : return action.profile;
  }

  return profile;
}
