
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



















































// console.log("Hello world");

// var apiKey = "b709ac3bd09c4e9ad0bf2e05ce1dcaa6"; 

// window.addEventListener('load', function () {

// var apiInfo = `http://api.openweathermap.org/data/2.5/forecast?q=${inputValue}&appid=${apiKey}&units=imperial`;
// fetch(apiInfo)
//     .then((response) => response.json())
//     console.log(apiInfo)
































//     function getInputValue() {
//         var inputValue = document.querySelector('#input-value').value;
//         if (inputValue) {
//             getWeather(inputValue);
//             addRow(inputValue);
//             document.querySelector('#input-value').value = '';
//         }
//     }   
    
//     document.querySelector('#input-value').addEventListener('click', getInputValue);

  


// })















