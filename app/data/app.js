const render = function() {
    $('.content').empty();
  
    for( let i = 0; i < employeeList.length; i++ ) {
      $('.content').append(`<p>${employeeList[i].name}</br>${employeeList[i].officeNum}</br>${employeeList[i].phoneNum}</p>`);
    }
  }
  
  render();
// 1. When the view button is pressed, render the list

  $('#submit').on('click', render);

  // 2. When the add button is pressed, use the `val` function to get the value of the user input and and add that name to the list. Re-render the list.
const getInputVal = function() {
    const tempList = {
        name: '',
        officeNum: 0,
        phoneNum: ''
      };
    tempList.name = $('#name').val();
    tempList.officeNum = $('#officeNum').val()
    tempList.phoneNum = $('#phoneNum').val()
    if(tempList.name!=''){
    employeeList.push(tempList);
    }
    console.log(employeeList);
  
    // After performing our actions, clear the name input and re-render the list
    $('#name').val('');
    $('#officeNum').val('');
    $('#phoneNum').val('');
    render();
  }
  
  $('#add').on('click', getInputVal);
