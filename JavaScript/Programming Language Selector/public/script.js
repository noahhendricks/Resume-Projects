//      Noah Hendricks
//      Student ID: 1900219
//      CIS 3368 - 22693 Homework 3, Spring 2021
//      Web front-end that lists information about programming languages

// Script Js File

// Attaching an event listener to the language menu <ul> html element.
// The actual event occurs on the individual anchor tags inside the <li> elements,
// but I take the advantage of event bubbling up to their parents from the origins.
// So whenever the user clicks on the individual anchor tag, the event bubbles up to the <ul> element,
// where I attach another event listener to the the submit button to hold a reference to this target element
// and use the inner text of the target element to trigger a route when clicked
// I also change the button text based on the item selected

// **querySelector** Ref Link: https://www.w3schools.com/jsref/met_document_queryselector.asp
// **EventListener** Ref Link: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// **preventDefault** Ref Link: https://www.w3schools.com/jsref/event_preventdefault.asp
// **Location Assign** Ref Link: https://developer.mozilla.org/en-US/docs/Web/API/Location/assign
// **Target Event** Ref Link: https://www.w3schools.com/jsref/event_target.asp
// **InnerText** Ref Link: https://www.w3schools.com/jsref/prop_node_innertext.asp

// Prevents multiple submissions on the submit button
// If the selected language is submitted once and its' page is displayed, you cannot submit that same language again (twice in a row)
document.querySelector('#language-menu').addEventListener('click', e => {
    e.preventDefault()

    // Adds the EventListener to the target variable within the block
    const target = e.target
    // console.log(target)

    // Selects the dropdown-toggle button class and sets the target to equal the 5 programming languages within its' value
    document.querySelector('.dropdown-toggle').innerText = target.innerText
    // console.log(target)

    // Adds the EventListener to the submit button when clicked by a user
    // Sets it equal to the value of the language that was slelected
    document.querySelector('.submit-btn').addEventListener('click', e => {
        let language = target.innerText

        // Checks a boolean, And if true then the value of the language is set to C Sharp
        if (language === 'C#')
            language = 'C sharp' 

        // Navigates the window to load a unique route for the programming language that is selected
        location.assign('/' + language)
    })
})


/*******************************************************************************************
                                    YOUTUBE CITATIONS
/*******************************************************************************************
/* **src (External Js File)** Ref Link: https://www.youtube.com/watch?v=CRRcYpxb_bY
/* **Event Listener** Ref Link: https://www.youtube.com/watch?v=QedZL8kXX6Y
/* **querySelector ** Ref Link: https://www.youtube.com/watch?v=3oOKAJTD2F8
/* **preventDefault** Ref Link: https://www.youtube.com/watch?v=UhO9tFyXHyg
/* **location assign** Ref Link: https://www.youtube.com/watch?v=MAuHA03Swuc
*/
