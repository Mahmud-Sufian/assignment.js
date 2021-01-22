// https://github.com/Mahmud-Sufian/assignment.js


//kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = 1000;
    var meter = kilometer * meter;
    return meter;
}

 


// budgetCalculator
function budgetCalculator(clock, mobile, laptop){
    var totalClock = 50 * clock;
    var totalMobile = 100 * mobile;
    var totalLaptop = 500 * laptop;
    var totalPrice = totalClock + totalMobile + totalLaptop;
    return totalPrice;
}




// hotelCost
function hotelCost(day){
    var rent = 0;
    if(day <= 10){
        rent = day * 100;
    }
    else if(day <= 20){
        var firstTenDay = 1000;
        var remaining = day - 10;
        var secondTenDay = remaining * 80;
        rent = firstTenDay + secondTenDay;
    }
    else{
        var firstTenDay = 1000;
        var secondTenDay = 800;
        var remaining = day - 20;
        var afterTwenty = remaining * 50;
        rent = firstTenDay + secondTenDay + afterTwenty;
    }
    return rent;
}




// megaFriend
 function megaFriend(friends) {
     var larger = friends[0];

    for (var i = 0; i < friends.length; i++) {
        var char = friends[i];

        if (char.length > larger.length) {
            larger = char;
        }
    }
    return larger;
}

