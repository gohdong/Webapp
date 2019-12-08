window.onload = function() {
    $("b_xml").onclick = function() {
        new Ajax.Request('http://localhost:3000/books.php', {
            method: 'get',
            parameters: { category: getCheckedRadio($$("input")) },
            onSuccess: showBooks_XML,

        });
    }
    $("b_json").onclick = function() {
        new Ajax.Request('http://localhost:3000/books_json.php', {
            method: 'get',
            parameters: { category: getCheckedRadio($$("input")) },
            onSuccess: showBooks_JSON,
        });
    }
};


function getCheckedRadio(radio_button) {
    for (var i = 0; i < radio_button.length; i++) {
        if (radio_button[i].checked) {
            return radio_button[i].value;
        }
    }
    return undefined;
}

async function showBooks_XML(ajax) {
    var books = ajax.responseXML.getElementsByTagName("book");
    // alert(ajax.responseText);
    // alert(books[0].getAttribute("category"));
    var ul = document.getElementById('books');

    removeUlChild(ul);
    for (var i = 0; i < books.length; i++) {
        var category = books[i].getAttribute("category");


        var title = books[i].getElementsByTagName("title")[0].firstChild.nodeValue;
        var author = books[i].getElementsByTagName("author")[0].firstChild.nodeValue;
        var year = books[i].getElementsByTagName("year")[0].firstChild.nodeValue;

        var li = document.createElement('li');

        li.innerHTML = title + ", by " + author + " (" + year + ")";
        ul.appendChild(li);

    }
}

function showBooks_JSON(ajax) {
    var data = JSON.parse(ajax.responseText);

    var ul = document.getElementById('books');

    removeUlChild(ul);

    for (var i = 0; i < data.books.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = data.books[i].title + ", by " +
            data.books[i].author + " (" + data.books[i].year + ")";
        $("books").appendChild(li);
    }
}


function removeUlChild(ul) {
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
}



function ajaxFailed(ajax, exception) {
    var errorMessage = "Error making Ajax request:\n\n";
    if (exception) {
        errorMessage += "Exception: " + exception.message;
    } else {
        errorMessage += "Server status:\n" + ajax.status + " " + ajax.statusText +
            "\n\nServer response text:\n" + ajax.responseText;
    }
    alert(errorMessage);
}