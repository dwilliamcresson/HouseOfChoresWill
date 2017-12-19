$(function() {
  $("#datepicker").datepicker();
});

$('#add-task').on('click', function() {

  let day = $('#sel1').val();
  let task = $('#sel2').val();
  let taskDate = $('#datepicker').val();
  let userID = 3;
  //console.log('Day', day);
  //console.log('Task', task);
  //console.log('Date', taskDate);

  $.ajax({
    method: "POST",
    url: "/api/addtask",
    data: {
      day: day,
      task: task,
      taskDate: taskDate,
      userID: userID
    }
  }).done(function(data) {
    loadTableData();
    console.log("Data sent: " + data);
  }).fail(function(error) {
    console.log(error);
  });
});

function loadTableData() {

  $.ajax({
    method: "GET", 
    url: "/api/chores"
  }).done(function(data) {
    let choreArray = [];
    let choreObj = data['chores'];

    for (i in choreObj) {
      choreArray.push(choreObj[i]);
    }

    for (j in choreArray) {

      for (a in choreArray[j]) {
        if (!Array.isArray(choreArray[j][a])) 
          continue; // Skips non-arrays
        
        var tasks = [];

        choreArray[j][a].map(function(item) {
          tasks.push(item.taskname);
        });

        choreArray[j][a] = tasks.join(',<br>');
      }
    }

    $('#container').empty();

    var grid = new FancyGrid({
      theme: 'dark',
      renderTo: 'container',
      barHeight: 37,
      titleHeight: 50,
      cellHeaderHeight: 40,
      title: 'House of Seattle',
      width: 1150,
      height: 565,
      panelBodyBorders: 50,
      cellHeight: 100,
      data: choreArray,
      selModel: 'cells',
      defaults: {
        type: 'string',
        width: 135,
        sortable: true,
        resizable: true,
        ellipsis: true
      },
      columnLines: false,
      tableLines: false,
      columns: [
        {
          index: 'user_id',
          title: '',
          locked: true,
          width: 50,
          type: 'number',
          align: 'center',
          cls: 'id-column-cls'
        },
        // {
        //   type: 'image',
        //   title: 'Photo',
        //   index: 'src',
        //   width: 120,
        //   cls: 'photo',
        //   align: 'center'
        // },
        {
          index: 'username',
          title: 'Name',
          locked: true,
          width: 150,
          cls: 'id-column-cls',
          align: 'center'
        }, {
          index: `Monday`,
          title: 'Monday',
          align: 'center',
          cellAlign: 'center'
        }, {
          index: 'Tuesday',
          title: 'Tuesday',
          align: 'center',
          cellAlign: 'center'
        }, {
          index: 'Wednesday',
          title: 'Wednesday',
          align: 'center',
          cellAlign: 'center'
        }, {
          index: 'Thursday',
          title: 'Thursday',
          align: 'center',
          cellAlign: 'center'
        }, {
          index: 'Friday',
          title: 'Friday',
          align: 'center',
          cellAlign: 'center'
        }, {
          index: 'Saturday',
          title: 'Saturday',
          align: 'center',
          cellAlign: 'center'
        }, {
          index: 'Sunday',
          title: 'Sunday',
          align: 'center',
          cellAlign: 'center'
        }
      ]
    });
  });
}

$(function() {
  //build table
  loadTableData();
});