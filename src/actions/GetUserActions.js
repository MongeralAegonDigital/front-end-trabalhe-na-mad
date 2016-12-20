import axios from 'axios';

export function getUserResponses(nomeuser, user) {

    return function(dispatch) {
          axios.get('https://api.github.com/users/'+nomeuser+'/repos')
          .then((response) => {
              document.getElementById('errorss').style.display = "none"
              dispatch({type: "FETCH_API_FULFILLED", payload: response})
          })
          .catch((err) => {
              document.getElementById('errorss').style.display = "block"
          })
    }
}
