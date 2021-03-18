
var apiKey = "b709ac3bd09c4e9ad0bf2e05ce1dcaa6"; 

window.addEventListener('load', function () {
    
    function getSearchVal() {
        var inputValue = document.querySelector('#input-value').value;
        if (inputValue) {
          searchWeather(inputValue);
          makeRow(inputValue);
          document.querySelector('#input-value').value = '';
        }
      }

      document.querySelector('#search-button').addEventListener('click', getSearchVal);

    var existingHistory;
    if (!JSON.parse(localStorage.getItem('history'))) {
      existingHistory = [];
    } else {
      existingHistory = JSON.parse(localStorage.getItem('history'));
    }


    function searchWeather(inputValue) {
      var endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=imperial`;
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {

      
          todayEl = document.querySelector('#current-day');
          todayEl.textContent = ' ';
                  
          var titleEl = document.createElement('h4');
          titleEl.classList.add('card');
          titleEl.textContent = `${data.name} (${new Date().toLocaleDateString()})`;
          var cardEl = document.createElement('div');
          cardEl.classList.add('card');
          var windEl = document.createElement('p');
          windEl.classList.add('card-text');
          var humidEl = document.createElement('p');
          humidEl.classList.add('card-text');
          var tempEl = document.createElement('p');
          tempEl.classList.add('card-text');
          humidEl.textContent = `Humidity: ${data.main.humidity} %`;
          tempEl.textContent = `Temperature: ${data.main.temp} °F`;
          var cardBody = document.createElement('div');
          cardBody.classList.add('card-body');       
          cardBody.appendChild(titleEl);
          cardBody.appendChild(tempEl);
          cardBody.appendChild(humidEl);
          cardBody.appendChild(windEl);
          cardEl.appendChild(cardBody);
          todayEl.appendChild(cardEl);
        });

        var endpoint = `http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${apiKey}&units=imperial`;
      fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        var fiveDayForecastEl = document.querySelector('#forecast');
        fiveDayForecastEl.innerHTML = '<h3 class="mt-3 align-items-center bg-transparent text-success">Five-Day Forecast:</h3>';
        fiveDayForecastRowEl = document.createElement('div');
        fiveDayForecastRowEl.className = '"row"';
        for (var i = 0; i < data.list.length; i++) {
          // Only look at forecasts around 3:00pm
          if (data.list[i].dt_txt.indexOf('15:00:00') !== -1) {
          }
        }
      }); 
    }
   
    
   
    function makeRow(inputValue) {
    
      var liEl = document.createElement('li');
      liEl.classList.add('list-group-item', 'list-group-item-action');
      liEl.id = inputValue;
      var text = inputValue;
      liEl.textContent = text;
   
      liEl.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
          searchWeather(e.target.textContent);
        }
      });
      document.getElementById('history').appendChild(liEl);
    }
   
    if (existingHistory && existingHistory.length > 0) {
      existingHistory.forEach((item) => makeRow(item));
    }
   

    

   
  });


































































