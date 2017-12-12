var data = [
  {
    id: 1,
    src: "http://fancygrid.com/images/staff/boy-4.png",
    name: 'Ted',
    surname: 'Smith',
    position: 'Java Developer',
    email: 'ted.smith@gmail.com',
    company: 'Electrical Systems',
    age: 30,
    education: 'High School Of Cambridge',
    knownledge: 'Java, Ruby'
  }, {
    id: 2,
    src: "http://fancygrid.com/images/staff/boy-1.png",
    name: 'Ed',
    surname: 'Johnson',
    position: 'C/C++ Market Data Developer',
    email: 'ed.johnson@gmail.com',
    company: 'Energy and Oil',
    age: 35,
    education: 'High School Of Cambridge',
    knownledge: 'C++'
  }, {
    id: 3,
    src: "http://fancygrid.com/images/staff/boy-2.png",
    name: 'Sam',
    surname: 'Williams',
    position: 'Technical Analyst',
    email: 'sam.williams@gmail.com',
    company: 'Airbus',
    age: 38,
    education: 'High School Of Cambridge',
    knownledge: ''
  }, {
    id: 4,
    src: "http://fancygrid.com/images/staff/boy-3.png",
    name: 'Alexander',
    surname: 'Brown',
    position: 'Project Manager',
    email: 'alexander.brown@gmail.com',
    company: 'Renault',
    age: 24,
    education: 'High School Of Cambridge',
    knownledge: ''
  }, {
    id: 5,
    src: "http://fancygrid.com/images/staff/boy-5.png",
    name: 'Nicholas',
    surname: 'Miller',
    position: 'Senior Software Engineer',
    email: 'nicholas.miller@gmail.com',
    company: 'Adobe',
    age: 33,
    education: 'High School Of Cambridge',
    knownledge: 'Unix, C/C++'
  }
];

$(function() {

  var grid = new FancyGrid({
    theme: 'dark',
    renderTo: 'container',
    title: 'House of ${HouseOfChores Name}',
    width: 800,
    height: 560,
    cellHeight: 90,
    data: data,
    selModel: 'cells',
    tbar: [
      {
        // theme: 'dark',
        type: 'segbutton',
        items: [
          {
            text: '1 Day',
            toggleGroup: 'sel',
            handler: function(b) {
              grid.setSelModel('columns');
            }
          }, {
            text: '3 days',
            toggleGroup: 'sel',
            handler: function(b) {
              grid.setSelModel('row');
            }
          }, {
            text: '7 Days',
            toggleGroup: 'sel',
            handler: function(b) {
              grid.setSelModel('rows');
            }
          }, {
            text: '30 Days',
            toggleGroup: 'sel',
            handler: function(b) {
              grid.setSelModel('rows');
            }
          }
        ]
      }
    ],
    defaults: {
      type: 'string',
      width: 150,
      sortable: true,
      resizable: true,
      ellipsis: true
    },
    columnLines: false,
    tableLines: false,
    columns: [
      {
        index: 'id',
        title: '',
        locked: true,
        width: 50,
        type: 'number',
        align: 'center',
        cls: 'id-column-cls',
      }, {
        type: 'image',
        title: 'Photo',
        index: 'src',
        cls: 'photo',
        align: 'center'
      }, {
        index: 'name',
        title: 'Name',
        cls: 'id-column-cls',
        align: 'center'
      }, {
        index: 'age',
        title: 'Age',
        type: 'number',
        align: 'center',
        cellAlign: 'center'
      
      }, {
        index: 'position',
        title: 'Position in the House',
        cls: 'id-column-cls',
        align: 'center'
      }, {
        index: 'knownledge',
        title: 'Tasks assigned',
        align: 'center'
      }
    ]
  });

});


var myNodelist = document.getElementsByTagName("LI");

for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}