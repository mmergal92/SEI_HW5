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
   const $h4a = $('<h4>').text('Wand');
   $container.append($h4a);
   const $ul = $('<ul>').attr('storage', 'trunk');
   $container.append($ul);
   const $li1 = $('<li>').text('beer better');
   $ul.append($li1);
   const $li2 = $('<li>').prop("class","secret").text('invisibility cloak');
   $ul.append($li2);
   const $li3 = $('<li>').prop("class","secret").text('magic map');
   $ul.append($li3);
   const $li4 = $('<li>').prop("class","secret").text('time turner');
   $ul.append($li4);
   const $li5 = $('<li>').prop("class","dog").text('leash');
   $ul.append($li5);
   const $li6 = $('<li>').text('Bertie Bott/s Every Flavor [Jelly] Beans');
   $ul.append($li6);
   const $h5 = $('<h5>').text('Spring 2017');
   $container.append($h5);
   const $table = $('<table>');
   $container.append($table);
   const $thead = $('<thead>');
   $table.append($thead);
   const $th1 = $('<th>').text('day');
   $thead.append($th1);
   const $th2 = $('<th>').text('class');
   $thead.append($th2);
//    const $tr = $('<tr>');
//    $table.append($tr);
//    const $td1 = $('<td1>').text('Monday');
//    $tr.append($td1);
//    const $td2 = $('<td2>').text('Herbology, Divination');
//    $tr.append($td2);
//    const $tr2 = $('<tr2>');
//    $table.append($tr2);
//    const $td3 = $('<td3>').text('Tuesday');
//    $tr2.append($td3);
//    const $td4 = $('<td4>').text('History of Magic, Charms');
//    $tr2.append($td4);
//    const $tr3 = $('<tr3>');
//    $table.append($tr3);
//    const $td5 = $('<td5>').text('Wednesday');
//    $tr3.append($td5);
//    const $td6 = $('<td6>').text('Potions, Transfiguration');
//    $tr3.append($td6);
//    const $tr4 = $('<tr4>');
//    $table.append($tr4);
//    const $td7 = $('<td7>').text('Thursday');
//    $tr4.append($td7);
//    const $td8 = $('<td8>').text('Defense Against the Dark Arts');
//    $tr4.append($td8);
//    const $tr5 = $('<tr5>');
//    $table.append($tr5);
//    const $td9 = $('<td9>').text('Friday');
//    $tr5.append($td9);
//    const $td10 = $('<td10>').text('Quidditch practice');
//    $tr5.append($td10);
   $table.append($('<tr>')
   .append($('<td>').append("Monday"))
   .append($('<td>').append("Herbology, Divination'"))
   )
   $table.append($('<tr>')
   .append($('<td>').append("Tuesday"))
   .append($('<td>').append("History of Magic, Charms"))
   )
   $table.append($('<tr>')
   .append($('<td>').append("Wednesday"))
   .append($('<td>').append("Potions, Transfiguration"))
 )
 $table.append($('<tr>')
 .append($('<td>').append("Thursday"))
 .append($('<td>').append("Defense Against the Dark Art"))
)
$table.append($('<tr>')
.append($('<td>').append("Friday"))
.append($('<td>').append("Quidditch practice"))
)
$h4a.remove();
$li1.remove();
const $h4b = $('<h4>').text('new wand').css('color', 'pink')
$h4.append($h4b);
//$h4.remove();
});
//couldn't remove the pet and add it back without removing the wand. Tried different methods of placing the wand in to fix it and coudn't find the right one.
