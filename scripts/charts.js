$(document).ready(function() {
    $("#graphicsMenu").click(function(){
        let simA = $("#numberRC").val();
        let simB = $("#numberRD").val();
        let aA = $("#numberA").val();
        let aB = $("#numberB").val();
        let bA = $("#numberC").val();
        let bB = $("#numberD").val();
        
       console.log(Number(aA) + " " + Number(aB)); 
       new Chart("fractionChartA", {
        type: "doughnut",
        data: {
          labels: ["Numerador", "Denominador"],
          datasets: [{
            backgroundColor: ["#248534", "#3448a8"],
            data: [Number(aA), Number(aB)]
          }]
        },
        options: {
            legend: {
                display: true,
                labels:{
                    fontFamily: 'PinkChicken',
                    fontColor: 'white'
                }
            },
          title: {
            display: false,
            text: ''
          }
        }
        });
        new Chart("fractionChartB", {
         type: "doughnut",
         data: {
           labels: ["Numerador", "Denominador"],
           datasets: [{
             backgroundColor: ["#de4935", "#cdde35"],
             data: [Number(bA), Number(bB)]
           }]
         },
         options: {
             legend: {
                 display: true,
                 labels:{
                     fontFamily: 'PinkChicken',
                     fontColor: 'white'
                 }
             },
           title: {
             display: false,
             text: ''
           }
         }
         });   
        new Chart("fractionChartR", {
         type: "doughnut",
         data: {
           labels: ["Numerador", "Denominador"],
           datasets: [{
             backgroundColor: ["#de4935", "#cdde35"],
             data: [Number(simA), Number(simB)]
           }]
         },
         options: {
             legend: {
                 display: true,
                 labels:{
                     fontFamily: 'PinkChicken',
                     fontColor: 'white'
                 }
             },
           title: {
             display: false,
             text: ''
           }
         }
       });   
     });
});