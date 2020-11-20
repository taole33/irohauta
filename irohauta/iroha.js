function mainroutine(hiragana){
    var output=[];
    var joinedchar ;
    var joinedchar2;
    var countlength = hiragana.length;
    
    for (var i=0 ; i < countlength+1 ; i++){        
        var random = Math.floor(Math.random()*(hiragana.length-i));
        joinedchar = hiragana.splice(random,1);
        joinedchar2 = joinedchar.join();
        output.push(joinedchar2)
    }
    
    $("#tBox").val(output.join(''));
}


$("#old").on("click", function() {
    var oldhiragana = ['あ','い','う','え','お','か','き','く','け','こ',
                'さ','し','す','せ','そ','た','ち','つ','て','と',
　　　　　　　　　'な','に','ぬ','ね','の','は','ひ','ふ','へ','ほ',
                'ま','み','む','め','も','や','ゆ','よ','ら','り','る','れ','ろ','わ','ゐ','ゑ','を'];
    mainroutine(oldhiragana);

    });

$("#new").on("click", function() {

    var newhiragana = ['あ','い','う','え','お','か','き','く','け','こ',
                'さ','し','す','せ','そ','た','ち','つ','て','と',
　　　　　　　　　'な','に','ぬ','ね','の','は','ひ','ふ','へ','ほ',
                'ま','み','む','め','も','や','ゆ','よ','ら','り','る','れ','ろ','わ','を','ん'];
                
    mainroutine(newhiragana);
});

