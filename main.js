function rle(stringToCompress) {
    if (stringToCompress[(stringToCompress.length - 1)] == 1) {
        console.log("------------- Cadena: " + stringToCompress + "-------------");
        rle2(stringToCompress);
        rle3(stringToCompress);
        rle4(stringToCompress);
    }
}
function rle2(stringToCompress) {
    alg(stringToCompress, 3, "rle-2");
}
function rle3(stringToCompress) {
    alg(stringToCompress, 7, "rle-3");
}
function rle4(stringToCompress) {
    alg(stringToCompress, 15, "rle-4");
}


function alg(stringToCompress, cota, rleName) {
    var groups = [];
    var contBytes = 0;
    for (var i = 0; i < stringToCompress.length; i++) {
        var group = "";

        while (stringToCompress[i] && stringToCompress[i] != "1" && group.length <= (cota-1)) {
            group += stringToCompress[i++];
        }
        
        if (group.length == cota || i == stringToCompress.length) {
            groups.push(group);
            contBytes += group.length;
            i--;
        } else {
            group += "1";
            groups.push(group);
            contBytes += group.length;
        }
    }
    console.log(rleName);
    console.log(groups);
}


function init() {
    var input = document.querySelector("input");
    input.addEventListener('keyup', function (e) {
        if (e.key == "0" || e.key == "1") {
            rle(input.value);
        }
    }, false);
}


init();



/*
1   01
3   11
1   001
3   011
5   101
7   111
1   0001
3   0011
5   0101
7   0111
9   1001
11  1011
13  1101
15  1111
*/

/*
00  1       000 1           0000    1
01  01      001 01          0001    01
10  001     010 001         0010    001
11  000     011 0001        0011    0001
            100 00001       0100    00001
            101 000001      0101    000001
            110 0000001     0110    0000001
            111 0000000     0111    00000001
                            1000    000000001
                            1001    0000000001
                            1010    00000000001
                            1011    000000000001
                            1100    0000000000001
                            1101    00000000000001
                            1110    000000000000001
                            1111    000000000000000
*/