function rle(stringToCompress) {
    if (stringToCompress[(stringToCompress.length - 1)] == 1) {
        alg(stringToCompress, 3, "rle-2");
        alg(stringToCompress, 7, "rle-3");
        alg(stringToCompress, 15, "rle-4");
        alg(stringToCompress, 31, "rle-5");
        document.querySelectorAll(".bytes-before").forEach(function(element) {
            element.innerHTML = stringToCompress.length;
        }, this);
        
    }
}

function alg(stringToCompress, cota, rleName) {
    var groups = [];
    var final = "";
    for (var i = 0; i < stringToCompress.length; i++) {
        var group = "";
        while (stringToCompress[i] && stringToCompress[i] != "1" && group.length <= (cota - 1)) {
            group += stringToCompress[i++];
        }
        if (group.length == cota || i == stringToCompress.length) {
            groups.push(group);
            i--;
        } else {
            group += "1";
            groups.push(group);
        }
    }
    groups.forEach(function (group) {
        var cont = 0;
        for (var i = 0; i < group.length; i++) {
            if (group[i] == "0") cont++;
        }
        binaryCeros = parseFloat(cont).toString(2);
        while (binaryCeros.length < parseInt(rleName[(rleName.length - 1)])) binaryCeros = "0" + binaryCeros;
        final += binaryCeros;
    }, this);
    document.querySelector("." + rleName + " .final").innerHTML = final;
    document.querySelector("." + rleName + " .bytes-after").innerHTML = final.length;
    document.querySelector("." + rleName + " .tasa").innerHTML = (stringToCompress.length / final.length).toString().substring(0,4);
}
function init() {
    var input = document.querySelector("input");
    input.addEventListener('keyup', function (e) {
        if (e.key == "0" || e.key == "1") rle(input.value);
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