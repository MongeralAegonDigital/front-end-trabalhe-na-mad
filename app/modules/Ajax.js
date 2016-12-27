import Axios from 'axios';

const Ajax = {

	getUser(user){
		return Axios.get('https://api.github.com/users/' + user);
	} , 

	getRepositories(user){
		return Axios.get('https://api.github.com/users/' + user + '/repos');
	}
} 

export default Ajax;