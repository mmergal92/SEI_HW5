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
   const $ul = $('<ul>').attr('storage', 'trunk');
   $container.append($ul)
   const $li1 = $('<li>').text('beer better')
   $ul.append($li1)
   const $li2 = $('<li>').prop("class","secret").text('invisibility cloak')
   $ul.append($li2)
   const $li3 = $('<li>').prop("class","secret").text('magic map')
   $ul.append($li3)
   const $li4 = $('<li>').prop("class","secret").text('time turner')
   $ul.append($li4)
   const $li5 = $('<li>').prop("class","dog").text('leash')
   $ul.append($li5)
   const $li6 = $('<li>').text('Bertie Bott/s Every Flavor [Jelly] Beans')
   $ul.append($li6)
});