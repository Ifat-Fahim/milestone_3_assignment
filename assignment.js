//Feet To Mile Converter
function feetToMile(feet) {
    if (feet >= 0) {
        var mile = feet / 5280;
        return mile;
    }
    return "Distance can not be a negative number";
}

//Wood Calculator
function woodCalculator(chair, table, bed) {
    if (chair >= 0 && table >= 0 && bed >= 0) {
        var chairWood = chair * 1;
        var tableWood = table * 3;
        var bedWood = bed * 5;
        var totalWood = chairWood + tableWood + bedWood;
        return totalWood;
    } else {
        return "You can not make negative number of furniture.";
    }
}

//Brick Calculator
function brickCalculator(num) {
    if (num < 0) {
        return "You can not go under the ground.";
    } else if (num <= 10) {
        var buildingHeight = 15 * num;
        var numberOfBricks = buildingHeight * 1000;
        return numberOfBricks;
    } else if (num <= 20) {
        var firstTenFloorHeight = 15 * 10;
        var remaingFloorHeight = 12 * (num - 10);
        var buildingHeight = firstTenFloorHeight + remaingFloorHeight;
        var numberOfBricks = buildingHeight * 1000;
        return numberOfBricks;
    } else {
        var firstTenFloorHeight = 15 * 10;
        var secondTenFloorHeight = 12 * 10;
        var remaingFloorHeight = 10 * (num - 20);
        var buildingHeight =
            firstTenFloorHeight + secondTenFloorHeight + remaingFloorHeight;
        var numberOfBricks = buildingHeight * 1000;
        return numberOfBricks;
    }
}

//Tiny Friend
function tinyFriend(arr) {
    var tinyFriendName = "";
    var friendNameLength = arr[0].length;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length <= friendNameLength) {
            friendNameLength = arr[i].length;
            tinyFriendName = arr[i];
        }
    }
    return tinyFriendName;
}
