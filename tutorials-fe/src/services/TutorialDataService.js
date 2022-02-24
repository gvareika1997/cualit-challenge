import http from "../utils/http-common";
// import axios from "axios";
//import jwt from "jsonwebtoken";
//import moment from "moment";
// import jose from "jose";
//const moment from 'moment';

class TutorialDataService {
  getAll(title, description) {
    return http.get(`/tutorials`, {
      params: { title: title, description: description },
    });
  }

  get(id) {
    return http.get(`/tutorials/${id}`);
  }

  create(data) {
    return http.post("/tutorials", data);
  }

  update(id, data) {
    return http.put(`/tutorials/${id}`, data);
  }

  delete(id) {
    return http.delete(`/tutorials/${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials/mass_delete`);
  }
}

export default new TutorialDataService();
