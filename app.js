const insert=document.getElementById('key');
window.addEventListener('keydown', function(e){
    insert.innerHTML=` 
    <table>
    //     <tbody>
    //         <tr>
    //             <th>key</th>
    //             <th>keyCode</th>
    //             <th>code</th>
    //         </tr>
    //         <tr>
    //             <td>${e.key===" "?'space':e.key}</td>
    //             <td>${e.keyCode}</td>
    //             <td>${e.code}</td>
    //         </tr>
    `
})


// testCode
// const displayPosition=document.getElementById('key').innerHTML; //The code you've provided won't work as expected because displayPosition is a string containing the inner HTML of the element with the ID 'key,' not a reference to the DOM element itself. You cannot add an event listener directly to a string. To add an event listener, you should first obtain the DOM element using getElementById and then add the event listener to it.
// console.log(displayPosition,typeof displayPosition);
// displayPosition.addEventListener  not works