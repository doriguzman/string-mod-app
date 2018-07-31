document.addEventListener('DOMContentLoaded', () => {
  var upperButton = document.getElementById('upper')
  let modP = document.querySelector('#modP');
  let nullB = document.querySelector('#nullB');
 
  nullB.addEventListener('click', (event) => {
    modP.innerText = 'you clicked this thing';
  });



document.querySelectorAll('button').forEach((button)=>{
button.addEventListener('click', ()=> {
  var text = document.getElementById('text')
  var insideTextBox = text.value //value inside the textbox 
  fetch(`http://localhost:3000/${button.id}/${insideTextBox}`)
  .then ((res)=>{
    console.log(res)
    return res.json();
}).then((object)=>{
    var keyValue= object.Result 
    modP.innerText=keyValue
 })

})

})

});




