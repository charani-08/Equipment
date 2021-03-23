// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const uri = 'http://localhost:64485/api/Equipment';
let equipmentlist = [];


function GetEquipments() {
    fetch(uri, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Accept': 'application / json',
            'Content-Type': 'application / json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        },


    })
        .then(response => response.json())
        .then(data => _displayEquipmentList(data))
        .catch(error => console.error('unable to get', error));
}



function addEquipment() {
    debugger;
    const equipment = {
        EquipmentName: document.getElementById('EquipmentName').value,
        EquipmentCurrency: document.getElementById('EquipmentCurrency').value,
        EquipmentPurchasedate: document.getElementById('EquipmentPurchasedate').value
    };
    
    fetch(uri, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application / json',
            'Content-Type': 'application / json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(equipment)

    })
        .then(response => response.json())
        .then(() => {

        })
        .catch(error => console.error('unable to add', error));
}


function DeleteItem() {
    debugger;
    const equipmentId = document.getElementById('deleteEquipmentlId').value;
    const equipment = {
        EquipmentName: document.getElementById('deleteEquipmentName').value,
        EquipmentCurrency: document.getElementById('deleteEquipmentCurrency').value,
        EquipmentPurchasedate: document.getElementById('deleteEquipmentPurchasedate').value
    };


    fetch(`${uri}/${equipmentId}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Accept': 'application / json',
            'Content-Type': 'application / json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(equipment)

    })
        .then(() => getItems())
        .catch(error => console.error('Unable to Delete', error));

    return false;
}

function deleteItem(id) {
    const item = equipmentlist.find(item => item.equipmentId == id);

    document.getElementById('deleteEquipmentlId').value = item.equipmentId;
    document.getElementById('deleteEquipmentName').value = item.equipmentName;
    document.getElementById('deleteEquipmentCurrency').value = item.equipmentCurrency;
    document.getElementById('deleteEquipmentPurchasedate').value = item.equipmentPurchasedate;

}

function UpdateItem() {
    debugger;
    const equipmentId = document.getElementById('editEquipmentId').value;
    const equipment = {
        EquipmentName: document.getElementById('editEquipmentName').value,
        EquipmentCurrency: document.getElementById('editEquipmentCurrency').value,
        EquipmentPurchasedate: document.getElementById('editEquipmentPurchasedate').value
    };


    fetch(`${uri}/${equipmentId}`, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Accept': 'application / json',
            'Content-Type': 'application / json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(equipment)

    })
        .then(() => getItems())
        .catch(error => console.error('Unable to Update', error));

    return false;
}




function displayEditForm(id) {
    const item = equipmentlist.find(item => item.equipmentId == id);

    document.getElementById('editEquipmentId').value = item.equipmentId;
    document.getElementById('editEquipmentName').value = item.equipmentName;
    document.getElementById('editEquipmentCurrency').value = item.equipmentCurrency;
    document.getElementById('editEquipmentPurchasedate').value = item.equipmentPurchasedate;

}


function _displayEquipmentList(data) {
    debugger;
    const tBody = document.getElementById('equipmentlist');
    tBody.innerHTML = ' ';



    const button = document.createElement('button');

    data.forEach(item => {
        let lableforId = document.createElement('label');
        lableforId.innerHTML = item.equipmentId;

        let lableforName = document.createElement('label');
        lableforName.innerHTML = item.equipmentName;

        let lableforCurrency = document.createElement('label');
        lableforCurrency.innerHTML = item.equipmentCurrency;

        let lableforpurchasedate = document.createElement('label');
        lableforpurchasedate.innerHTML = item.equipmentPurchasedate;


        let editbutton = button.cloneNode(false);
        editbutton.innerText = 'Edit';
        editbutton.setAttribute('onclick', `displayEditForm(${item.equipmentId})`);

        let deletebutton = button.cloneNode(false);
        deletebutton.innerText = 'Delete';
        deletebutton.setAttribute('onclick', `deleteItem(${item.equipmentId})`);

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        td1.appendChild(lableforId);

        let td2 = tr.insertCell(1);
        td2.appendChild(lableforName);

        let td3 = tr.insertCell(2);
        td3.appendChild(lableforCurrency);

        let td4 = tr.insertCell(3);
        td4.appendChild(lableforpurchasedate);

        let td5 = tr.insertCell(4);
        td5.appendChild(editbutton);

        let td6 = tr.insertCell(5);
        td6.appendChild(deletebutton);


    });

    equipmentlist = data;

}

