import axios from 'axios';
import { STORAGE, URLS } from '../config';

export class CallApi {
  static GET(url: string, params: any, isAuth: boolean = false, isAdaptive: boolean = false) {
    return new Promise((resolve, reject) => {
      let headers = {};
      if (isAuth || isAdaptive) {
        const token = localStorage.getItem(STORAGE);
        if (token) {
          headers = {
            Authorization: `Bearer ${token}`,
          };
        }
      }
      return axios({
        method: 'GET',
        url,
        headers,
        params,
      })
        .then(success => {
          return resolve(success);
        })
        .catch(error => {
          if(error.response && error.response.status===401 && window.location.pathname != URLS.LOGIN) {
            localStorage.removeItem(STORAGE);
            window.location.href=URLS.LOGIN;
          }
          return reject(error.response);
        });
    });
  }

  static POST(url: string, data: any, isAuth: boolean = false, isAdaptive: boolean = false) {
    return new Promise((resolve, reject) => {
      let headers = {};
      if (isAuth || isAdaptive) {
        const token = localStorage.getItem(STORAGE);
        if (token) {
          headers = {
            Authorization: `Bearer ${token}`,
          };
        }
      }
      return axios({
        method: 'POST',
        url,
        headers,
        data,
      })
        .then(success => {
          return resolve(success);
        })
        .catch(error => {
          if(error.response && error.response.status===401 && window.location.pathname != URLS.LOGIN) {
            localStorage.removeItem(STORAGE);
            window.location.href=URLS.LOGIN;
          }
          return reject(error.response);
        });
    });
  }

  static PUT(url: string, data: any, isAuth: boolean = false, isAdaptive: boolean = false) {
    return new Promise((resolve, reject) => {
      let headers = {};
      if (isAuth || isAdaptive) {
        const token = localStorage.getItem(STORAGE);
        if (token) {
          headers = {
            Authorization: `Bearer ${token}`,
          };
        }
      }
      return axios({
        method: 'PUT',
        url,
        headers,
        data,
      })
        .then(success => {
          return resolve(success);
        })
        .catch(error => {
          if(error.response && error.response.status===401 && window.location.pathname != URLS.LOGIN) {
            localStorage.removeItem(STORAGE);
            window.location.href=URLS.LOGIN;
          }
          return reject(error.response);
        });
    });
  }

  static DELETE(url: string, data: any, isAuth: boolean = false, isAdaptive: boolean = false) {
    return new Promise((resolve, reject) => {
      let headers = {};
      if (isAuth || isAdaptive) {
        const token = localStorage.getItem(STORAGE);
        if (token) {
          headers = {
            Authorization: `Bearer ${token}`,
          };
        }
      }
      return axios({
        method: 'DELETE',
        url,
        headers,
        data,
      })
        .then(success => {
          return resolve(success);
        })
        .catch(error => {
          if(error.response && error.response.status===401 && window.location.pathname != URLS.LOGIN) {
            localStorage.removeItem(STORAGE);
            window.location.href=URLS.LOGIN;
          }
          return reject(error.response);
        });
    });
  }
}
