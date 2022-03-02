$(document).ready(function () {
    /* -- Select already existing elements -- */
    var $gameboard = $('#gameboard');
    $gameboard.html('');

    // console.log(problems); -> works
    // js vars to use.
    var vi = problems[0].vi;
    var xf = problems[0].xf;
    /* -- Create new HTML elements -- */
    var $vi = $(`<p>Inital Velocity: ${vi} m/s</p>`);
    var $xf = $(`<p>Target Distance: ${xf} m</p>`);
    var $ans = $('<textarea id="ans" placeholder="Answer for theta"></textarea>');
    // setting a title for the answer box - did not work
    var $ansLabel = $('<label for="ans">Type answer: </label>');
    var $enterANS = $('<button>Enter</button>');
    
    /* -- Create event handler functions -- */
    // To check if the answer is correct
    function enterANS(enterEvent) {
        alert('enter button has been clicked');
        // how to grab data from text box & compare the answer to the correct one
    }
    /* -- Set event listeners (providing appropriate handlers as input) -- */
    // listen for the submitting on the Enter button
    $enterANS.on('click', enterANS);
    /* -- Append new HTML elements to the DOM -- */
    $vi.appendTo($gameboard);
    $xf.appendTo($gameboard);
    $ansLabel.appendTo($gameboard);
    $ans.appendTo($gameboard);
    $enterANS.appendTo($gameboard);

});
