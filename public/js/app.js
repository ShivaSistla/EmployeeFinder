const render = function() {
  $('.content').empty();
  const name = $('#name').val();
  const photo = $('#photo').val();
  const q = [$('#q1').val(),$('#q2').val(),$('#q3').val(),$('#q4').val(),$('#q5').val(),$('#q6').val(),$('#q7').val(),$('#q8').val(),$('#q9').val(),$('#q10').val()];
  
  let total =[];

 

    for( let i = 0; i < employeesList.length; i++ ) {
      total[i] = 0;
     for(let j=0;j<q.length;j++)
     {
 
       if(q[j]=='')
        q[j]=0;
       total[i] = total[i] + Math.abs(parseInt(employeesList[i].scores[j]) - parseInt(q[j]));
     }
    
    }
    console.log(total);
    let index = total.indexOf(Math.min(...total));
    console.log(index);
    alert(`Employee with the greatest compatibility: ${employeesList[index].name}`+'\n'+`Picture: ${employeesList[index].photo}`);
    $('.content').append(`<p>Employee with the greatest compatibility: ${employeesList[index].name}</br>Picture: <img src = "${employeesList[index].photo}" alt = "PIC"></img></p>`);
  }
  
  //render();
// 1. When the view button is pressed, render the list

  $('#submit').on('click', render);
