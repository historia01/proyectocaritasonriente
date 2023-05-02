let parsedValueAct2 = [0], parsedValueAct3 = [0], parsedValueAct1TL = [0], parsedValueAct2TL = [0], defaultRanking, defaultRecord, defaultProgress, defaultCompletion;

//default values

defaultCompletion = "Incompleto";
defaultProgress = "⬜⬜⬜⬜⬜";
defaultRanking = "✖";
defaultRecord = "✔️ 0 | ✖ 0 | ⬜ 0";

//Parsing Values

function parseValues() {
    try {
        parsedValueAct2 = JSON.parse(localStorage.getItem("activity2Normal"));
    } catch (error) {
        parsedValueAct2[0] = 0;
    }

    try {
        parsedValueAct3 = JSON.parse(localStorage.getItem("activity3Normal"));
    } catch (error) {
        parsedValueAct3[0] = 0;
    }

    try {
        parsedValueAct2 = JSON.parse(localStorage.getItem("activity2Normal"));
    } catch (error) {
        parsedValueAct2[0] = 0;
    }

    try {
        parsedValueAct1TL = JSON.parse(localStorage.getItem("activity1Inf"));
    } catch (error) {
        parsedValueAct1TL[0] = -1;
    }

    try {
        parsedValueAct2TL = JSON.parse(localStorage.getItem("activity2Inf"));
    } catch (error) {
        parsedValueAct2TL[0] = -1;
    }
}


/*Basic Logic
if(activityTwoDataArray[0]==1){
  $("#act2iscom").html("");
	$("#act2bar").html("");
	$("#act2rat").html("");   
   for(i = 1; i < (activityTwoDataArray[2].length); i++){
        if(activityTwoDataArray[2][i] == 0){
            //addProgress(0);
          $("#act2bar").append("🟥");
        } else {
            //addProgress(1);
          $("#act2bar").append("🟩");
        }
    }
  $("#act2iscom").html("Completa");
  if(activityTwoDataArray[1] == 2	){
    $("#act2rat").html("⭐⭐⭐"); 
  } else if (activityTwoDataArray[1] == 1) {
    $("#act2rat").html("⭐⭐"); 
  } else {
    $("#act2rat").html("⭐"); 
  }
}
*/ 

/* function setNewData(parsedArray, target){
    let targetRanking, targetProgress, targetRecord, targetCompletion;
    switch(target){
        case 2: targetRanking=$("#act2rat");
            targetProgress=$("#act2bar");
            targetRanking=$("#act2rat");
            targetCompletion=$("#act2iscom");
        case 3: targetRanking=$("#act3rat");
            targetProgress=$("#act3bar");
            targetRanking=$("#act3rat");
            targetCompletion=$("#act3iscom");
        }
    if(parsedArray[0]==1){
        targetCompletion.html("");
        targetProgress.html("");
        targetRanking.html("");   
        for(i = 1; i < (parsedArray[2].length); i++){
            if(parsedArray[2][i] == 0){
                //addProgress(0);
            targetProgress.append("🟥");
            } else {
                //addProgress(1);
            targetProgress.append("🟩");
            }
        }
        targetCompletion.html("Completa");
        if(parsedArray[1] == 2	){
            targetRanking.html("⭐⭐⭐"); 
        } else if (parsedArray[1] == 1) {
            targetRanking.html("⭐⭐"); 
        } else {
            targetRanking.html("⭐"); 
        }
    }
} */

function setNewData(parsedArray, target, type){
    let targetRanking, targetProgress, targetRecord, targetCompletion;
    switch(target){
        case 0: targetRanking=$("#act2rat");
            targetProgress=$("#act2bar");
            targetRanking=$("#act2rat");
            targetCompletion=$("#act2iscom");
            break
        case 1: targetRanking=$("#act3rat");
            targetProgress=$("#act3bar");
            targetRanking=$("#act3rat");
            targetCompletion=$("#act3iscom");
            break
        case 2: targetRanking=$("#actNTM1rat");
            targetRecord=$("#actNTM1iscom");
            break;
        case 3: targetRanking=$("#actNTM2rat");
            targetRecord=$("#actNTM2iscom");
            break;
            
        
    }
    if((parsedArray && parsedArray[0]==1)&& type == 0){
        targetCompletion.html("");
        targetProgress.html("");
        targetRanking.html("");   
        for(i = 1; i < (parsedArray[2].length); i++){
            if(parsedArray[2][i] == 0){
                //addProgress(0);
                targetProgress.append("🟥");
            } else {
                //addProgress(1);
                targetProgress.append("🟩");
            }
        }
        targetCompletion.html("Completa");
        if(parsedArray[1] == 2	){
            targetRanking.html("⭐⭐⭐"); 
        } else if (parsedArray[1] == 1) {
            targetRanking.html("⭐⭐"); 
        } else {
            targetRanking.html("⭐"); 
        }
    } else if((parsedArray && parsedArray[0] != -1)&& type == 1) {
        console.log(parsedArray);
        if(parsedArray[3] == 4){
            targetRanking.html("⭐⭐⭐⭐⭐"); 
        } else if (parsedArray[3] == 3) {
            targetRanking.html("⭐⭐⭐⭐"); 
        } else if (parsedArray[3] == 2) {
            targetRanking.html("⭐⭐⭐"); 
        } else if (parsedArray[3] == 1) {
            targetRanking.html("⭐⭐"); 
        } else {
            targetRanking.html("⭐"); 
        }
        targetRecord.html(`✔️ ${parsedArray[2]} | ✖ ${parsedArray[1]} | ⬜ ${parsedArray[0]}`)
    }
}

function updateData(){
    parseValues();
    setNewData(parsedValueAct2, 0, 0);
    setNewData(parsedValueAct3, 1, 0);
    setNewData(parsedValueAct1TL, 2, 1);
    setNewData(parsedValueAct2TL, 3, 1);
}

$(document).ready(function(){
    setInterval(function(){
        updateData();
    },20000)

    $("#otherMenu").click(function(){
        updateData();
    })
})