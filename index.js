// code your solution here
function superbowlWin(record) {
    let win = record.find(function(element){
        if(element.result ===`W`){
            return element
        }
    })
    if(win){
        return win.year
    }
    else{return undefined}
}