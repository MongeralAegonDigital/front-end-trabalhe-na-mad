import axios from 'axios';
export function UserAuth() {
    return function (dispatch) {
        let clientId = '3f867b669a5f6cca8ca6';
        let secretId = '3f16308d702e29943eec24baf6f86f67aded362e';
        let redirect = 'http://localhost:3000/user'
        window.location.href='https://github.com/login/oauth/authorize?client_id='+clientId+'&redirect_uri='+redirect;
    }
}

export function getToken() {
    return function (dispatch) {
        let clientId = '3f867b669a5f6cca8ca6';
        let secretId = '3f16308d702e29943eec24baf6f86f67aded362e';

        var getQueryString = function ( field, url ) {
            var href = url ? url : window.location.href;
            var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
            var string = reg.exec(href);
            return string ? string[1] : null;
        };

        var code = getQueryString('code');
        console.log(code)

        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.get('https://github.com/login/oauth/access_token?client_id='+clientId+'&client_secret='+secretId+'&code='+code, {
            withCredentials: true,
            responseType: 'json'
        }, config
        )
        .then((response) => {
            console.log(response)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function getUserResponses(nomeuser, user) {

    return function(dispatch) {
          axios.get('https://api.github.com/users/'+nomeuser+'/repos',{ headers: {
                  'Authorization': 'token ae0bb29ea6af65835cc4ef6a1312af992d87f172'
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
