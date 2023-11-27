document.addEventListener('DOMContentLoaded', function () {
    // Set the date we're counting down to
    const countDownDate = new Date('Aug 13, 2025 00:00:00').getTime();
  
    // Update the countdown every 1 second
    const x = setInterval(function () {
      // Get the current date and time
      const now = new Date().getTime();
  
      // Calculate the remaining time
      const distance = countDownDate - now;
  
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown
      document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
  
      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown').innerHTML = 'MISSION COMPLETE';
      }
    }, 1000);
  });


document.addEventListener('DOMContentLoaded', function () {
  // Set the date we're counting up from
  const countUpDate = new Date('Aug 13, 2025 00:00:00').getTime();

  // Update the count-up every 1 second
  const x = setInterval(function () {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time elapsed
    const elapsedTime = now - countUpDate;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    if (elapsedTime < 0)
    {
        document.getElementById('countup').innerHTML = "0";
    }

    else
    // Display the count-up
    document.getElementById('countup').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';
  }, 1000);
});