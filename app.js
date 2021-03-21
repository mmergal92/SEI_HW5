// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {
//       console.log('I did it! I linked jQuery and this js file!');
// };

$(() => {
   const $container = $('#container');
   console.log($container);
   const $h1 = $('<h1>').text('Hogwarts');
   $container.append($h1);
   console.log($h1);
   const $h2 = $('<h2>').text('Maria');
   $container.append($h2);
   const $h3 = $('<h3>').text('Gryffindor');
   $container.append($h3);
   const $h4 = $('<h4>').prop("class","dog").text('Bruno');
   $container.append($h4);
});