
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
      var endpoint = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=imperial`;
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
   
          if (!existingHistory.includes(inputValue)) {
            handleHistory(inputValue);
          }
      
          currentDay = document.querySelector('#current-day');
          currentDay.textContent = ' ';
                  
          var title = document.createElement('h4');
          title.classList.add('card');
          title.textContent = `${data.name} 
          (${new Date().toLocaleDateString()})`;
          var windEl = document.createElement('p');
          windEl.classList.add('card-text');
          var humidEl = document.createElement('p');
          humidEl.classList.add('card-text');
          var cardEl = document.createElement('div');
          cardEl.classList.add('card');
          var tempEl = document.createElement('p');
          tempEl.classList.add('card-text');
          humidEl.textContent = `Humidity: ${data.main.humidity} %`;
          tempEl.textContent = `Temperature: ${data.main.temp} °F`;
          var cardBody = document.createElement('div');
          cardBody.classList.add('card-body');
                             
         
        
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


































































