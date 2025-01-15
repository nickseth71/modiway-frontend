<template>
    <div class="loader"></div>
  </template>
  
  <script>
  export default {
    name: "Spinner",
  };
  </script>
  
  <style scoped>
  .loader {
    --d: 22px; 
    width: 12px;
    height: 12px; 
    border-radius: 80%;
    color: #272727;
    box-shadow:
      calc(1 * var(--d)) calc(0 * var(--d)) 0 0px #272727, 
      calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 -1px rgba(39, 39, 39, 0.85), 
      calc(0 * var(--d)) calc(1 * var(--d)) 0 -2px rgba(39, 39, 39, 0.8), 
      calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 -3px rgba(39, 39, 39, 0.7), /* Smaller */
      calc(-1 * var(--d)) calc(0 * var(--d)) 0 -4px rgba(39, 39, 39, 0.6), /* Smaller */
      calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 -5px rgba(39, 39, 39, 0.5), /* Smaller */
      calc(0 * var(--d)) calc(-1 * var(--d)) 0 -6px rgba(39, 39, 39, 0.4), /* Smaller */
      calc(0.707 * var(--d)) calc(-0.707 * var(--d)) 0 -6px rgba(39, 39, 39, 0.3); /* Smallest circle */
    animation: spin 1.2s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  