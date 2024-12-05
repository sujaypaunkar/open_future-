// document.addEventListener("DOMContentLoaded", function() {
//     const counters = document.querySelectorAll(".timer");
  
//     counters.forEach(counter => {
//         const target = +counter.getAttribute("data-to");
//         const speed = +counter.getAttribute("data-speed");
  
//         function updateCount() {
//             let count = +counter.innerText;
//             let increment = Math.ceil(target / (speed / 10)); // Adjust increment based on speed
  
//             if (count < target) {
//                 counter.innerText = count + increment;
//                 setTimeout(updateCount, 10);
//             } else {
//                 counter.innerText = target;
//                 setTimeout(startCountdown, 500); // Restart countdown after reaching target, with a delay
//             }
//         }
  
//         // Reset and start the countdown
//         function startCountdown() {
//             counter.innerText = "0"; // Reset counter to 0
//             updateCount(); // Start the countdown
//         }
  
//         startCountdown(); // Start the initial countdown
//     });
//   });
  // Function to animate counters
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const max = parseInt(counter.getAttribute('data-max'), 10);
        let current = 1;

        setInterval(() => {
            counter.textContent = current;
            current++;
            if (current > max) current = 1; // Reset when reaching the max value
        }, 20); // Speed increased (100ms ÷ 10 = 10ms)
    });
});
