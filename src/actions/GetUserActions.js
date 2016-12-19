import axios from 'axios';

export function getUserResponses(nomeuser, user) {

    return function(dispatch) {
          axios.get('https://api.github.com/users/'+nomeuser+'/repos',{ headers: {
                  'Authorization': 'token 6b8af95f775066631a45f2ef6009fc2823521f4b'
              }
          })
          .then((response) => {
              document.getElementById('errorss').style.display = "none"
              dispatch({type: "FETCH_API_FULFILLED", payload: response})
          })
          .catch((err) => {
              document.getElementById('errorss').style.display = "block"
          })
    }
}
