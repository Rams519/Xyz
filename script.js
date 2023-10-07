var inc = 1;
function addinput(type) {
    let output;
    switch (type) {
        case 'name': {
            output = ('<div id="grp-' + inc + '" class="card" > <div class="card-header "> <h3 class="card-title" id="h3input-' + inc + '">Full Name</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="openNav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_grp(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group row"> <div class="col-6"> <input type="text" class="form-control" id="InputEmail1" placeholder="First Name"> </div> <div class="col-6"> <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Last Name"> </div> </div> </div><div id="mySidebar-' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"> </div></div> </div> ');

            break;
        }
       

        case 'textarea': {
            output = ('<div id="grp-' + inc + '" class="card"> <div class="card-header "> <h3 class="card-title" id="h3input-' + inc + '">Textarea</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="openNav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_grp(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group"> <textarea class="form-control"> </textarea> </div> </div> <div id="mySidebar-' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"> </div></div> </div>');
            break;
        }
        case 'email': {
            output = ('<div id="grp-' + inc + '" class="card"> <div class="card-header ">   <h3 class="card-title" id="h3input-' + inc + '" >Email Address  </h3><div class="card-tools"> <button  class="btn btn-tool btn-sm" onclick="openNav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button  onclick="remove_grp(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div></div><div class="card-body table-responsive "> <div class="form-group"> <input type="email" class="form-control" id="InputEmailq-' + inc + '" placeholder="Enter email"> </div>example@example.com</div></div><div id="mySidebar-' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"> </div></div>   </div>');

            break;
        }
        case 'phone': {
            output = ('<div id="grp-' + inc + '" class="card"> <div class="card-header "> <h3 class="card-title" id="h3input-' + inc + '">Phone Number</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="openNav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_grp(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group"> <input type="number" class="form-control" placeholder="(91 0123456789)"> </div> Please enter a valid phone number. </div> </div> <div id="mySidebar-' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"> </div></div> </div>');

            break;
        }
        case 'dropdown': {
            output = (' <div id="grp-' + inc + '" class="card"> <div class="card-header "> <h3 class="card-title" id="h3input-' + inc + '">Type a question</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="openNav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_grp(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group"  > <label>Please Select</label> <select class="custom-select" id="dropdown-group-' + inc + '"> <option>option 1</option> <option>option 2</option> <option>option 3</option> <option>option 4</option> <option>option 5</option> </select> </div> </div> </div> <div id="mySidebar-' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"> </div><label for="labeltext_area">Options</label> <textarea onchange="get_textarea_val(' + inc + ',this.value)" id="options_' + inc + '" name="options" class="textBox" onkeyup="update_dropdown(' + inc + ',this.value)" type="textarea" rows="5" data-testid="textarea">Type option 1  \nType option 2 \nType option 3 \nType option 4</textarea></div></div></div> </div>');

        }
        case 'checkbox': {
            output = ('<div id="grp-' + inc + '" class="card"> <div class="card-header "> <h3 class="card-title"  id="h3input-' + inc + '">Type a question</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="openNav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_grp(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group"  id="checkbox-group-' + inc + '"> <div class="form-check"> <input class="form-check-input" type="checkbox" checked=""> <label class="form-check-label">Type option 1</label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" > <label class="form-check-label">Type option 2</label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" > <label class="form-check-label">Type option 3</label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" > <label class="form-check-label">Type option 4</label> </div> </div> </div> </div> <div id="mySidebar-' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"> </div><label for="labeltext_area">Options</label> <textarea onchange="get_textarea_val(' + inc + ',this.value)" id="options_' + inc + '" name="options" class="textBox" onkeyup="update_checkbox(' + inc + ',this.value)" type="textarea" rows="5" data-testid="textarea">Type option 1  \nType option 2 \nType option 3 \nType option 4</textarea></div></div></div>');

            break;
        }
      
        case 'radiobutton': {
            output = ('<div id="grp-' + inc + '" class="card"> <div class="card-header "> <h3 class="card-title" id="h3input-' + inc + '">Type a question</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="openNav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_grp(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group" id="option-group-' + inc + '"> <div class="form-check"> <input class="form-check-input" type="radio" name="radio-' + inc + '"  checked=""> <label class="form-check-label">Type option 1</label> </div> <div class="form-check"> <input class="form-check-input" type="radio" name="radio-' + inc + '"> <label class="form-check-label">Type option 2</label> </div> <div class="form-check"> <input class="form-check-input" name="radio-' + inc + '"  type="radio"> <label class="form-check-label">Type option 3</label> </div> <div class="form-check"> <input name="radio-' + inc + '" class="form-check-input" type="radio"> <label class="form-check-label">Type option 4</label> </div> </div> </div> </div> <div id="mySidebar-' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"> </div> <label for="labeltext_area">Options</label> <textarea onchange="get_textarea_val(' + inc + ',this.value)" id="options_' + inc + '" name="options" class="textBox" onkeyup="update_option(' + inc + ',this.value)" type="textarea" rows="5" data-testid="textarea">Type option 1  \nType option 2 \nType option 3 \nType option 4</textarea></div> </div>');

            break;
        }
      
        case 'image': {
            output = ('<div id="grp-' + inc + '" class="card"> <div class="card-header "> <h3 class="card-title" id="h3input-' + inc + '">Select image</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="openNav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_grp(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group row"> <div class="col-6"> <h3>Select image</h3> <input type="file" placeholder="Select image"> </div> </div> </div><div id="mySidebar-' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"> </div></div> </div> ');

            break;
        }
    }
    inc++;
    $(output).hide().appendTo("#element_wrapper").slideDown("");

}

function inpute(id, value) {

    document.getElementById("h3input-" + id).innerHTML = value;
}

function remove_grp(id) {
    $("#grp-" + id).slideUp(600, function () {
        $(this).remove();
    });
}
var j = 1;
function openNav(id) {
    if (j > 1) {
        return;
    }
    document.getElementById("mySidebar-" + id).style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    j++;
}

function closeNav(id) {

    document.getElementById("mySidebar-" + id).style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    j = 1;
}

// for radiobutton 
function update_option(id, val) {
    var checked = "";
    var retrunOption = "";
    var radio_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {            
            retrunOption += '<div class="form-check"> <input ="" class="form-check-input" type="radio" name="radio-' + id + '"  value="' + name + '"> <label class="form-check-label">' + name + '</label> </div>';
        }
    })
    $("#option-group-" + id).html(retrunOption);
}


function get_textarea_val(id, val) {
    var someArray = [];   
    var radio_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {
            someArray.push(name);
        }
    })    
    for (var i = 0; i < someArray.length; i++) {
        radio_text += someArray[i];
        radio_text += "\r\n";
    }
    $("#options_" + id).val(radio_text);
}


// for checkbox feild
function update_checkbox(id, val) {
    console.log(id, val);
    var checked = "";
    var retrunOption = "";
    var checkbox_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {            
            retrunOption += '<div class="form-check"> <input ="" class="form-check-input" type="checkbox" name="checkbox-' + id + '"  value="' + name + '"> <label class="form-check-label">' + name + '</label> </div>';
          
        }
    })
    $("#checkbox-group-" + id).html(retrunOption);
}

function get_textarea_val(id, val) {
    var someArray = [];   
    var checkbox_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {
            someArray.push(name);
        }
    })    
    for (var i = 0; i < someArray.length; i++) {
        checkbox_text += someArray[i];
        checkbox_text += "\r\n";
    }
    $("#options_" + id).val(checkbox_text);
}

// for dropdown feild
function update_dropdown(id, val) {
    var checked = "";
    var retrunOption = "";
    var checkbox_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {            
            retrunOption += ' <div class="form-group"><select name="dropdown-' + id + '"  value="' + name + '"class="custom-select"> <option> ' + name + '</option></div>';
          
        }
       
    })
    $("#dropdown-group-" + id).html(retrunOption);
}

function get_textarea_val(id, val) {
    var someArray = [];   
    var checkbox_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {
            someArray.push(name);
        }
    })    
    for (var i = 0; i < someArray.length; i++) {
        checkbox_text += someArray[i];
        checkbox_text += "\r\n";
    }
    $("#options_" + id).val(checkbox_text);
}


