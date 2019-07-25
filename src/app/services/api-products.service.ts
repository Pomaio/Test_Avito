import { Injectable } from '@angular/core';

const BASE_URL = 'https://avito.dump.academy/products';

@Injectable()

export class ApiWorkService {

  constructor() { }

  getProducts(): string {
    const xhr = new XMLHttpRequest();
    let data;
    xhr.open('GET', `${BASE_URL}/1`, true);
    xhr.send();
    xhr.onreadystatechange = function() { // (3)
      if (xhr.status !== 200) {
        console.log(xhr.status + ':' + xhr.statusText);
      } else {
        console.log(xhr.response);
        return (xhr.response);
      }
    };
    return xhr.responseText;
  }
}
