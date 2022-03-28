function superbowlWin(record) {
    const superbowl = record.find(element => element.result === "W")
    if (superbowl) {
        return superbowl.year
    }
    else { return undefined }
}


//return (superbowl ? superbowl.year : superbowl);

// return superbowl ? superbowl.year : record;


  //return superbow.year



  //if (superbowl === "W") {
   // return undefined;
//} else {
   // return superbowl.year;
//}


//return superbowl ? "2015" : undefined;