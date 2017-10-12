$(document).ready(start);

function start() {
    console.log('jquery sourced.');
    $('#recordForm').on('submit', submitForm);
    getRecords();
}

function submitForm(event) {
    event.preventDefault();
    console.log('Record Name', $('#recordName').val());
    var recordForSale = {
        name: $('#recordName').val(),
        year: $('#recordYear').val(),
        cost: $('#recordCost').val()
    }
    console.log('Record', recordForSale);
    $.ajax({
        type: 'POST', // Could be method: 'POST'
        url: '/records', // MUST MATCH THE ROUTE ON THE SERVER
        data: recordForSale
    }).done(function(response){
        console.log(response);
        getRecords();
    }).fail(function(message){
        console.log('Error', message);
    })
}

function getRecords() {
    $.ajax({
        type: 'GET',
        url: '/records' // Matches what is on the server
    }).done(function(response){
        var recordCollection = response;
        appendToDom(recordCollection);
    })
}

function appendToDom(records) {
    $('#recordTable').empty();
    for(var i = 0; i < records.length; i += 1) {
        // Append to the dom
        var record = records[i];
        var $tr = $('<tr></tr>');
        $tr.append('<td>' + record.name + '</td>');
        $tr.append('<td>' + record.isNewRelease + '</td>');
        $tr.append('<td>' + record.year + '</td>');
        $tr.append('<td>' + record.cost + '</td>');
        $('#recordTable').append($tr);
    }
}