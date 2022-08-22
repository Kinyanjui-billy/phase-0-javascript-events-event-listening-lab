function addingEventListener(childAlert) {
    const input = document.getElementById('button');
    function clickAlert(e) {  
      alert('I was clicked!');
    }
    input.addEventListener('click', clickAlert);
  } 
 

