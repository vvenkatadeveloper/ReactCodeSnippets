function tick() {
  
  var thetime=(
  <div>
    The time is {new Date().toLocaleTimeString()}
  </div>
  );
  
  
  
  ReactDOM.render(thetime, document.getElementById('root'));
}

setInterval(tick, 1000);