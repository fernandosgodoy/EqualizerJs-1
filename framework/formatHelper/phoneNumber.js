var formatPhoneNumber = function(number) {
    return number.replace(/^(\d{2})(\d{4})(\d{4}).*/, '($1)$2-$3');
}

/* 
Transform a phone number in a Phone number pattern.
*/
var transformPhoneNumber = function(number, event) {
    switch (event.keyCode) {
        case 8:  
        case 9:  // Tab
        case 13: // Enter
        case 37: // Left
        case 38: // Up
        case 39: // Right
        case 40: // Down
            return;
    }

    if (number == undefined ||
        number == '')
        return;

    number = number.replace('(', '');
    number = number.replace(')', '');
    number = number.replace('-', '');

    if (!validateNumber(number)) {
        var remove = number.toString().substring(0, number.length - 1);
        return formatarTelefoneMask(remove);
    }

    return formatarTelefoneMask(number);
}

var formatarTelefoneMask = function(number) {
    var formatedMask = '';

    var charArr = number.toString().split('');
    for (j=0; j<10; j++) {
        if (j == 0) {
            if (charArr[j] != undefined) {
                formatedMask += "(" + charArr[j];
            }
        }
        
        if (j == 2) {
            if (charArr[j] != undefined) {
                formatedMask += ")" + charArr[j];
            }
        }

        if (j == 6) {
            if (charArr[j] != undefined) {
                formatedMask += "-" + charArr[j];
            }
        }

        if (!(j == 0) &&
            !(j == 2) &&
            !(j == 6)) {
            if (charArr[j] != undefined) {
                formatedMask += charArr[j];
            }
        }
    }
    return formatedMask;
}