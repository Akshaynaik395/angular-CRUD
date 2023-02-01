var selectedRow =null;

function onFormSubmit() {
	// event.preventDefault();
    if(document.getElementById("pn").value.length==0)
    {
        alert("fill the details")
    }
    if(document.getElementById("jr").value.length==0)
    {
        alert("fill the details")
    }
    else{

        event.preventDefault();
        var formData = readFormData();
        if (selectedRow ==null){
            insertNewRecord(formData);
		} 
       
         else{
             updateRecord(formData);
             
        }
        
        resetForm();  
    } 
    // alert("record updated successfully"); 
}


//Retrieve the data
function readFormData() {
    var formData = {};
    formData["pn"] = document.getElementById("pn").value;
    formData["jr"] = document.getElementById("jr").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["ap"] = document.getElementById("ap").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["p"] = document.getElementById("p").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.pn;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.jr;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.qty;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.ap;
    cell5 = newRow.insertCell(4);
	    cell5.innerHTML = data.dob;
    cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.p;

    cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button>` 
    cell8 = newRow.insertCell(7);
        cell8.innerHTML =`<button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("pn").value = selectedRow.cells[0].innerHTML;
    document.getElementById("jr").value = selectedRow.cells[1].innerHTML;
    document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
    document.getElementById("ap").value = selectedRow.cells[3].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[4].innerHTML;
    document.getElementById("p").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.pn;
    selectedRow.cells[1].innerHTML = formData.jr;
    selectedRow.cells[2].innerHTML = formData.qty;
    selectedRow.cells[3].innerHTML = formData.ap;
    selectedRow.cells[4].innerHTML = formData.dob;
    selectedRow.cells[5].innerHTML = formData.p;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("pn").value = '';
    document.getElementById("p").value = '';
    document.getElementById("jr").value = '';
    
    document.getElementById("qty").value = '';
    document.getElementById("ap").value = '';
    document.getElementById("dob").value = '';
    selectedRow = null;
}











var namecheck = /^[A-Z]{1}[A-Za-z]{2,30}$/;
function onFocusname(){
    var err = document.getElementById("s1");
    

    var name=clubform.pn.value;

    if(name.length === 0){
        err.innerHTML="first name is required";
        
        clubform.pn.focus();
    }
}

function onBlurname(){
    var err = document.getElementById("s1");
    

    var name=clubform.pn.value;
    if(name.length>0){
        if(name.length>=3){
            if(name.match(namecheck)){
                err.innerHTML="";
                return true;
            }else{
                clubform.pn.focus();
                clubform.pn.value="";
                err.innerHTML=
                "only character and first character must be Capital letter";
                
            }
        }else{
            err.innerHTML="minimum 3 character required";
            clubform.pn.focus();
        }
    }else{
        clubform.pn.focus();
    }
}

var jrcheck= /^[0-9]{1,3}$/;
function onFocusjr(){
    var err = document.getElementById("s2");
    

    var name=clubform.jr.value;

    if(name.length === 0){
        err.innerHTML="jersey no is required";
        
        clubform.jr.focus();
    }
}

function onBlurjr(){
    var err = document.getElementById("s2");
    

    var name=clubform.jr.value;
    if(name.length>0){
        if(name.length>=1){
            if(name.match(jrcheck)){
                err.innerHTML="";
                return true;
            }else{
                clubform.jr.focus();
                clubform.jr.value="";
                err.innerHTML=""
                "please enter valid no";
                
            }
        }else{
            err.innerHTML="max 3 digit required";
            clubform.jr.focus();
        }
    }else{
        clubform.jr.focus();
    }
}

