import axios from 'axios';

let client_id = "3f867b669a5f6cca8ca6";
let redirect_uri = "http://localhost:3000/";
let client_secret = "3f16308d702e29943eec24baf6f86f67aded362e";
export function formPrincipalAuth() {
    return function (dispatch) {
        window.location.href='https://github.com/login/oauth/authorize?client_id='+client_id+'&redirect_uri='+redirect_uri
    }
}

export function formPrincipalToken(code) {

    return function(dispatch) {
        axios({
          method: 'post',
          url: 'https://github.com/login/oauth/access_token?client_id='+client_id+'&client_secret='+client_secret+'&code='+code
          }).then((response) => {
              let tokenSplit = response.data.split('=');
              let newToken = tokenSplit[1].split('&')[0]
              dispatch({type: "FETCH_API_FULFILLED", payload:newToken})
          })
    }
}
