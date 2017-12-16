$('#add-task').on('click', function() {

  let day = $('#sel1').val();
  let task = $('#sel2').val();

  console.log('Day', day);
  //console.log('Task', task);

});

$.ajax({method: "GET", url: "/api/chores"}).done(function(data) {
  let choreArray = [];
  
  
  //console.log(data);
  let choreObj = data['chores'];
  //console.log(choreObj);
  
  for (i in choreObj) {
    choreArray.push(choreObj[i]);
  }
  //console.log(choreArray);
  //console.log(choreArray[0].Monday[0].taskname);
  
  for (j in choreArray) {
    
    console.log(choreArray[j]);
    
    
    for (a in choreArray[j]) {  
      if (!Array.isArray(choreArray[j][a])) continue; // Skips non-arrays
      
      var tasks = [];
      
      choreArray[j][a].map(function(item) {
        tasks.push(item.taskname);
      });
      
      choreArray[j][a] = tasks.join('<br>');
      
      /*
      for (b in choreArray[j][a]) {  
        var zzz = choreArray[j][a][b]['taskname'];
        //console.log(choreArray[j][a][b]['taskname']);
        
      }
      */
    
    }

}
  
  $(function() {

    var grid = new FancyGrid({
      theme: 'dark',
      renderTo: 'container',
      barHeight: 37,
      titleHeight: 50,
      cellHeaderHeight: 40,
      title: 'House of Chores Name',
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
  //dataLoaded(data);

  // function dataLoaded(data) {
  //
  //   for (const [key, value] of Object.entries(data)) {
  //     console.log(key, value)
  //   }
  //
  // }

  // var data = [
  //   {
  //     user_id: 1,
  //     src: "http://fancygrid.com/images/staff/boy-4.png",
  //     username: 'Gerald',
  //     monday: 'vacuum',
  //     tuesday: ''
  //   }, {
  //     id: 2,
  //     src: "http://fancygrid.com/images/staff/boy-1.png",
  //     name: 'Ed',
  //     surname: 'Johnson',
  //     position: 'C/C++ Market Data Developer',
  //     email: 'ed.johnson@gmail.com',
  //     company: 'Energy and Oil',
  //     age: 35,
  //     education: 'High School Of Cambridge',
  //     knownledge: 'C++'
  //   }, {
  //     id: 3,
  //     src: "http://fancygrid.com/images/staff/boy-2.png",
  //     name: 'Sam',
  //     surname: 'Williams',
  //     position: 'Technical Analyst',
  //     email: 'sam.williams@gmail.com',
  //     company: 'Airbus',
  //     age: 38,
  //     education: 'High School Of Cambridge',
  //     knownledge: 'Javascript'
  //   }, {
  //     id: 4,
  //     src: "http://fancygrid.com/images/staff/boy-3.png",
  //     name: 'Alexander',
  //     surname: 'Brown',
  //     position: 'Project Manager',
  //     email: 'alexander.brown@gmail.com',
  //     company: 'Renault',
  //     age: 24,
  //     education: 'High School Of Cambridge',
  //     knownledge: ''
  //   }, {
  //     id: 5,
  //     src: "http://fancygrid.com/images/staff/boy-5.png",
  //     name: 'Nicholas',
  //     surname: 'Miller',
  //     position: 'Senior Software Engineer',
  //     email: 'nicholas.miller@gmail.com',
  //     company: 'Adobe',
  //     age: 33,
  //     education: 'High School Of Cambridge',
  //     knownledge: 'Unix, C/C++'
  //   }
  // ];
  //
  // $(function() {
  //
  //   var grid = new FancyGrid({
  //     theme: 'dark',
  //     renderTo: 'container',
  //     title: 'House of ${HouseOfChores Name}',
  //     width: 1150,
  //     height: 565,
  //     cellHeight: 100,
  //     data: data,
  //     selModel: 'cells',
  //     defaults: {
  //       type: 'string',
  //       width: 150,
  //       sortable: true,
  //       resizable: true,
  //       ellipsis: true
  //     },
  //     columnLines: false,
  //     tableLines: false,
  //     columns: [
  //       {
  //         index: 'id',
  //         title: '',
  //         locked: true,
  //         width: 50,
  //         type: 'number',
  //         align: 'center',
  //         cls: 'id-column-cls'
  //       }, {
  //         type: 'image',
  //         title: 'Photo',
  //         index: 'src',
  //         width: 120,
  //         cls: 'photo',
  //         align: 'center'
  //       }, {
  //         index: 'username',
  //         title: 'Name',
  //         width: 100,
  //         cls: 'id-column-cls',
  //         align: 'center'
  //       }, {
  //         index: 'monday',
  //         title: 'Monday',
  //         align: 'center',
  //         cellAlign: 'center'
  //       }, {
  //         index: 'tuesday',
  //         title: 'Tuesday',
  //         align: 'center',
  //         cellAlign: 'center'
  //       }, {
  //         index: 'wednesday',
  //         title: 'Wednesday',
  //         align: 'center',
  //         cellAlign: 'center'
  //       }, {
  //         index: 'thursday',
  //         title: 'Thursday',
  //         align: 'center',
  //         cellAlign: 'center'
  //       }, {
  //         index: 'friday',
  //         title: 'Friday',
  //         align: 'center',
  //         cellAlign: 'center'
  //       }, {
  //         index: 'saturday',
  //         title: 'Saturday',
  //         align: 'center',
  //         cellAlign: 'center'
  //       }, {
  //         index: 'sunday',
  //         title: 'Sunday',
  //         align: 'center',
  //         cellAlign: 'center'
  //       }
  //     ]
  //   });
  // });

  //
  //
  // $('#add-task').on('click', function() {
  //
  //   let day = $('#sel1').val();
  //   let task = $('#sel2').val();
  //
  //   console.log('Day', day);
  //   console.log('Task', task);
  //
  // });
  //
  // var data = [
  //   {
  //     id: 1,
  //     src: "http://fancygrid.com/images/staff/boy-4.png",
  //     name: 'Ted',
  //     monday: `$(www.google.com)`,
  //     tuesday: ''
  //   }, {
  //     id: 2,
  //     src: "http://fancygrid.com/images/staff/boy-1.png",
  //     name: 'Ed',
  //     surname: 'Johnson',
  //     position: 'C/C++ Market Data Developer',
  //     email: 'ed.johnson@gmail.com',
  //     company: 'Energy and Oil',
  //     age: 35,
  //     education: 'High School Of Cambridge',
  //     knownledge: 'C++'
  //   }, {
  //     id: 3,
  //     src: "http://fancygrid.com/images/staff/boy-2.png",
  //     name: 'Sam',
  //     surname: 'Williams',
  //     position: 'Technical Analyst',
  //     email: 'sam.williams@gmail.com',
  //     company: 'Airbus',
  //     age: 38,
  //     education: 'High School Of Cambridge',
  //     knownledge: 'Javascript'
  //   }, {
  //     id: 4,
  //     src: "http://fancygrid.com/images/staff/boy-3.png",
  //     name: 'Alexander',
  //     surname: 'Brown',
  //     position: 'Project Manager',
  //     email: 'alexander.brown@gmail.com',
  //     company: 'Renault',
  //     age: 24,
  //     education: 'High School Of Cambridge',
  //     knownledge: ''
  //   }, {
  //     id: 5,
  //     src: "http://fancygrid.com/images/staff/boy-5.png",
  //     name: 'Nicholas',
  //     surname: 'Miller',
  //     position: 'Senior Software Engineer',
  //     email: 'nicholas.miller@gmail.com',
  //     company: 'Adobe',
  //     age: 33,
  //     education: 'High School Of Cambridge',
  //     knownledge: 'Unix, C/C++'
  //   }
  // ];
  //
  // $(function() {
  //
  //   var grid = new FancyGrid({
  //     theme: 'dark',
  //     renderTo: 'container',
  //     title: 'House of ${HouseOfChores Name}',
  //     width: 1150,
  //     height: 565,
  //     cellHeight: 100,
  //     data: data,
  //     selModel: 'cells',
  //     defaults: {
  //       type: 'string',
  //       width: 150,
  //       sortable: true,
  //       resizable: true,
  //       ellipsis: true
  //     },
  //     columnLines: false,
  //     tableLines: false,
  //     columns: [
  //       {
  //         index: 'id',
  //         title: '',
  //         locked: true,
  //         width: 50,
  //         type: 'number',
  //         align: 'center',
  //         cls: 'id-column-cls'
  //       }, {
  //         type: 'image',
  //         title: 'Photo',
  //         index: 'src',
  //         width: 120,
  //         cls: 'photo',
  //         align: 'center'
  //       }, {
  //         index: 'name',
  //         title: 'Name',
  //         width: 100,
  //         cls: 'id-column-cls',
  //         align: 'center'
  //       }, {
  //         index: 'monday',
  //         title: 'Monday',
  //         align: 'center',
  //         cellAlign: 'center'
  //       }, {
  //         index: 'tuesday',
  //         title: 'Tuesday',
  //         align: 'center',
  //         cellAlign: 'center'
  //       }, {
  //         index: 'wednesday',
  //         title: 'Wednesday',
  //         align: 'center',
  //         cellAlign: 'center'
  //       }, {
  //         index: 'thursday',
  //         title: 'Thursday',
  //         align: 'center',
  //         cellAlign: 'center'
  //       }, {
  //         index: 'friday',
  //         title: 'Friday',
  //         align: 'center',
  //         cellAlign: 'center'
  //       }, {
  //         index: 'saturday',
  //         title: 'Saturday',
  //         align: 'center',
  //         cellAlign: 'center'
  //       }, {
  //         index: 'sunday',
  //         title: 'Sunday',
  //         align: 'center',
  //         cellAlign: 'center'
  //       }
  //     ]
  //   });
  // });
})