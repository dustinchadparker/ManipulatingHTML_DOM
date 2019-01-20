document.addEventListener("DOMContentLoaded", function () {

    //create first button and place in document with an alert when clicked
    let btn = document.createElement('button');
    btn.id = 'firstButton';
    let btnText = document.createTextNode("First Button");
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    btn.addEventListener("click", function () {
        alert("This is a nice message.");
    });

    let btn2 = document.getElementById('secondButton');
    let inputForBtn2 = document.getElementsByTagName('input')[0];

    document.body.appendChild(btn2);
    document.body.appendChild(inputForBtn2);

    //second button click function
    btn2.addEventListener("click", function() {
        let valueText = document.getElementsByTagName('input')[0].value;
        alert(valueText);
    });

    // //set style of buttons for aesthetics
    // $('button').css({
    //     'display': 'inline-block',
    //     'float': 'left',
    //     'width': '120px',
    //     'margin-right': '100%', // adjust
    //     'height': '25px', // adjust
    //     'padding': '5px' //adjust
    // });

    //insert div after text area
    let div1 = document.createElement('div');
    document.body.appendChild(div1);

    div1.setAttribute('style', 'width: 50px; height: 50px; background-color: pink');

    // //set div as a pink box
    // $('div').css({
    //     'display': 'inline-block',
    //     'float': 'left',
    //     'width': '50px',
    //     'height': '50px',
    //     'margin-right': '100%', // adjust
    //     'background-color': 'pink', // adjust
    //     'padding': '5px' //adjust
    // });

    //pink and yellow change based on hover
    div1.onmouseover = function() {
        $(this).css("background-color", "yellow");
    }
    
    div1.onmouseout = function() {
        $(this).css("background-color", "pink");
    }

    //create a par and append
    let p1 = document.createElement('p');
    let pText = document.createTextNode("Random paragraph text");
    p1.appendChild(pText);
    document.body.appendChild(p1);
    
    //change par to random color when clicked
    p1.addEventListener("click", function() {
        let col1 = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        p1.setAttribute('style', 'color: ' + col1);
    });

    //add a button and an empty div
    let btn3 = document.createElement('button');
    let btn3Text = document.createTextNode("My Name Button");
    btn3.appendChild(btn3Text);
    document.body.appendChild(btn3);

    let div2 = document.createElement('div');
    document.body.appendChild(div2);

    let span1 = document.createElement('span');
    
    //add a span to div when button is clicked.
    btn3.addEventListener("click", function() {

        let spanText = document.createTextNode('Charlie ');
        span1.appendChild(spanText);
        div2.appendChild(span1);
    });

    //place friendsButton and span div at end of page

    let btn4 = document.getElementById('friendsButton');
    document.body.appendChild(btn4);

    let uList = document.getElementById('friendUL');
    uList.setAttribute('style', 'color: red');
    document.body.appendChild(uList);

    //add friends to ul when button is clicked.
    btn4.addEventListener("click", function() {

        let friendsArray = ["Friend1", "Friend2", "Friend3", "Friend4", "Friend5", "Friend6", "Friend7", "Friend8", "Friend9", "Friend10"];

        for(let i=0; i<friendsArray.length; i++) {
            let liName = document.createElement('li');
            uList.appendChild(liName);

            let liText = document.createTextNode(friendsArray[i]);
            liName.appendChild(liText);
        }

    });



});