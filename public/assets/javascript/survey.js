$(document).ready(function() {
    // Questions listed in an array so they can be procedurally generated.
    var tasks = [
        'Washing Dishes',
        'Vacuuming',
        'Taking out the Trash',
        'Cleaning the Bathroom',
        'Cooking Dinner',
        'Grocery Shopping',
        'Laundry',
        'Mowing the Lawn',
        'Trimming the Hedges'
    ];

    // Choices for personality questions.
    var choices = [
        '1 (I Do Not Mind This Task At All or Enjoy This Task)',
        '2',
        '3',
        '4',
        '5 (I Am Indifferent To This Task)',
        '6',
        '7',
        '8',
        '9',
        '10 (This Is The Most Loathesome Thing I Could Possibly Do With My Time)'
    ];

    // Identify div where questions will be inserted and initialize counter to 0.
    var taskDiv = $('#tasks');
    i = 0;

    // For each question, create a div.
    tasks.forEach(function (task) {
        i++;
        // Fill that div with a header, the question, and the choices selector.
        var item = $('<div class="Task">');
        var headline = $('<h4>').text('Task ' + i);
        var taskTest = $('<p>').text(task);
        var dropDown = $('<div class="form-group">');
        var select = $('<select class="form-control selector">');
        // Create an option for each choice.
        choices.forEach(function(choice) {
            var option = $('<option>').stringify(choice);
            select.append(option);
        });
        select.attr('id', 'select' + i);
        // Add the dropdown to the item, then add the item to the questions div.
        dropDown.append(select);
        item.append(headline, questionText, dropDown);
        var br = $('<br>');
        questionDiv.append(item, br);
    });

    // Event handler for when the form is submitted.
    $('#submit').on('click', function(event) {

        // Prevent reload.
        event.preventDefault();

        // Capture username and image link values.
        var userName = $('#userName').val();
        var imageLink = $('#imageLink').val();

        // If both of those items were filled out, gather other answers and submit.
        if (userName.length > 0 && imageLink.length >0) {
            var answers = [];

            // Add the response for each selector to the array of answers.
            Object.keys($('.selector')).forEach(function(key) {
                if (answers.length < tasks.length) {
                    // Take only the first character of the answer, which is the number.
                    answers.push($('.selector')[key].value.charAt(0));
                }
            });

            // Put the data in object form.
            var surveyData = {
                name: userName,
                photo: imageLink,
                answers: answers
            };

            // POST that data to /api/friends.
            $.post('/api/friends', surveyData, function(data) {

                // Use data callback to display result.
                if (data) {

                    // Empty out modal and username and link fields.
                    $('#modalContent').empty();
                    $('#userName').val('');
                    $('#imageLink').val('');

                    // The results are in array form. For each object, grab the name and URL.
                    data.forEach(function(profile) {
                        var profileDiv = $('<div class="profile">');
                        var name = profile.name;
                        var photoURL = profile.photo;
                        // Put the name in a header.
                        var nameHeader = $('<h3>').text(name);
                        // Add a photo with an 'src' of the photoURL submitted.
                        var photo = $('<img>').attr('src', photoURL);
                        profileDiv.append(nameHeader, photo);

                        // Add these items to the modal.
                        $('#modalContent').append(profileDiv);
                    });

                    // If there is a tie for the best match and so you have more than one,
                    if (data.length > 1) {
                        // Make sure the header is plural.
                        $('.modal-title').text('Your best matches!');
                    } else {
                        // Make sure the header is singular.
                        $('.modal-title').text('Your best match!');
                    }

                    // Display the result modal.
                    $('#resultModal').modal();
                }
            });
        // If either name or URL is missing, show the error modal.
        } else {
            $('#errorModal').modal();
            // The error modal can be dismissed but it will also disappear after 2 seconds.
            setTimeout(function() {
                $('#errorModal').modal('hide');
            }, 2000);
        }
    });
});
