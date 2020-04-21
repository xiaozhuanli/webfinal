/** Add any JavaScript you need to this file. */

filterSelection("all");

function addClass(element, name) 
{
    var i, array1, array2;
    array1 = element.className.split(" ");
    array2 = name.split(" ");

    for (i = 0; i < array2.length; i++) {
        if (array1.indexOf(array2[i]) === -1) {
            element.className += " " + array2[i];
        }
    }
}

function removeClass(element, name)
{
    var i, array1, array2;
    array1 = element.className.split(" ");
    array2 = name.split(" ");

    for (i = 0; i < array2.length; i++) {
        while (array1.indexOf(array2[i]) > -1) {
            array1.splice(array1.indexOf(array2[i]), 1);
        }
    }
    element.className = array1.join(" ");
}

function filterSelection(type)
{
    var column, i;
    column = document.getElementsByClassName("column");
    if (type === "all") type = "";

    for (i = 0; i < column.length; i++) {
        removeClass(column[i], "show");
        if (column[i].className.indexOf(type) > -1) addClass(column[i], "show");
    }
}

var btnContainer = document.getElementById("myListContainer");
var buttns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < buttns.length; i++) {
    buttns[i].addEventListener("click", function() {
        var cur = document.getElementsByClassName("active");
        cur[0].className = cur[0].className.replace(" active", "");
        this.className += " active";
    });
}

addLoadEvent(function() 
{ var imgs = document.getElementById("content").getElementsByTagName("img");
 imgSizer.collate(imgs); }); 



