// Format string on button click
document.getElementById('formatBtn').addEventListener('click', function() {
    let inputString = document.getElementById('stringInput').value;
    let extension = document.getElementById('extensionSelect').value;

    // Replace spaces with underscores and remove periods
    let formattedString = inputString.replace(/\./g, '').replace(/ /g, '_');

    // Combine with the extension
    let resultString = 'Q' + formattedString + '.' + extension;

    // Display the result
    document.getElementById('result').innerText = resultString;

    // Show the Copy button after the string is generated
    document.getElementById('copyBtn').style.display = 'block';

    // Reset the tooltip text to 'Copy' when the button appears
    document.getElementById('tooltipText').innerText = 'Copy';
});

// Copy to clipboard functionality
document.getElementById('copyBtn').addEventListener('click', function() {
    // Get the formatted string from the result
    let resultString = document.getElementById('result').innerText;

    // Create a temporary input element to hold the string to copy
    let tempInput = document.createElement('input');
    tempInput.value = resultString;

    // Append the temporary input element to the body
    document.body.appendChild(tempInput);

    // Select the content of the input field
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Execute the copy command
    document.execCommand('copy');

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Change the tooltip text to 'Copied'
    document.getElementById('tooltipText').innerText = 'Copied';
});
