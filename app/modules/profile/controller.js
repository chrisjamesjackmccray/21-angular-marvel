class ApodController {
  constructor($http, $sce) {
    this._$http = $http;
    this.getData();
  }

  getData() {
    this._$http
    .get('https://api.nasa.gov/planetaray/apod')
    .then((response) => {
      console.log(response);
      this.data = response.data;
    });
  }
}

export default ApodController;
