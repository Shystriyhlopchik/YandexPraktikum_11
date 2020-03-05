class Api {
    constructor(options) {
      this.url = options.url;
      this.headers = options.headers;
    }
  
    // запрос информации 
    get(path) {
      return fetch(`${this.url}${path}`, {
          headers: this.headers
        })
        .then(this.checkStatus)
        .catch(this.showError);
    }
  
    // обновление информации пользователя
    updateInfo(path, fields) {
      const [input1, input2] = fields;
      return fetch(`${this.url}${path}`, {
          method: 'PATCH',
          headers: this.headers,
          body: JSON.stringify({
            name: input1.value,
            about: input2.value
          })
        })
        .then(this.checkStatus)
        .catch(this.showError);
    }
  
    // добавление новой карточки на сервер
    postCard(path, fields) {
      const [input1, input2] = fields;
      return fetch(`${this.url}${path}`, {
          method: 'POST',
          headers: this.headers,
          body: JSON.stringify({
            name: input1.value,
            link: input2.value
          })
        })
        .then(this.checkStatus)
        .catch(this.showError);
    }
  
    //проверка статуса ответа от сервера
    checkStatus(res) {
      return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
    }
  
    // отобразить в консоли ошибку
    showError(err) {
      return console.log(err);
    }
  }