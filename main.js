function rle(stringToCompress) {
    if (stringToCompress[(stringToCompress.length - 1)] == 1) {
        alg(stringToCompress, 3, "rle-2");
        alg(stringToCompress, 7, "rle-3");
        alg(stringToCompress, 15, "rle-4");
        alg(stringToCompress, 31, "rle-5");
        document.querySelectorAll(".bytes-before").forEach(function (element) {
            element.innerHTML = stringToCompress.length;
        }, this);
    }
}

function alg(stringToCompress, cota, rleName) {
    var groups = [], final = "";
    
    for (var i = 0; i < stringToCompress.length; i++) {
        var group = "";
        
        while (stringToCompress[i] && stringToCompress[i] != "1" && group.length <= (cota - 1)) group += stringToCompress[i++];
        
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
        for (var i = 0; i < group.length; i++) if (group[i] == "0") cont++;
        
        binaryCeros = parseFloat(cont).toString(2);
        
        while (binaryCeros.length < parseInt(rleName[(rleName.length - 1)])) binaryCeros = "0" + binaryCeros;
        
        final += binaryCeros;
    }, this);
    
    document.querySelector("." + rleName + " .final").innerHTML = final;
    document.querySelector("." + rleName + " .bytes-after").innerHTML = final.length;
    document.querySelector("." + rleName + " .tasa").innerHTML = (stringToCompress.length / final.length).toString().substring(0, 4);
}

document.querySelector("input").addEventListener('keyup', function (e) {
    if (e.key == "0" || e.key == "1") rle(this.value);
}, false);