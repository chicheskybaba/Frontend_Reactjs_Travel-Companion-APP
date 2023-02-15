import axios from 'axios';




class TripDataService {

    getAll(token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.get('http://localhost:8000/api/trips/');
    }


    createTrip(data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.post("http://localhost:8000/api/trips/", data);
    }


    updateTrip(id, data, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`http://localhost:8000/api/trips/${id}`, data);
    }


    deleteTrip(id, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.delete(`http://localhost:8000/api/trips/${id}`);
    }


    completeTrip(id, token) {
        axios.defaults.headers.common["Authorization"] = "Token " + token;
        return axios.put(`http://localhost:8000/api/trips/${id}/complete`);
    }


    login(data) {
        return axios.post("http://localhost:8000/api/login/", data);
    }


    signup(data) {
        return axios.post("http://localhost:8000/api/signup/", data);
    }

}


export default new TripDataService();
















