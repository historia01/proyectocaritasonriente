$(document).ready(function() {
    var aChart;
    var bChart;
    var rChart;

    $("#graphicsMenu").click(function(){ 
        if($(".sidebarRight").css("right")=="-300px"){
            $(".sidebarRight").css("right", "0");
            let simA = $("#numberRC").val();
            let simB = $("#numberRD").val();
            let aA = $("#numberA").val();
            let aB = $("#numberB").val();
            let bA = $("#numberC").val();
            let bB = $("#numberD").val();
            
            console.log(Number(aA) + " " + Number(aB));
            aChart = new Chart("fractionChartA", {
                type: "pie",
                data: {
                    labels: ["Numerador", "Denominador"],
                    datasets: [{
                        backgroundColor: ["#deab35", "#3568de"],
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
            bChart = new Chart("fractionChartB", {
                type: "pie",
                data: {
                    labels: ["Numerador", "Denominador"],
                    datasets: [{
                        backgroundColor: ["#debf35", "#de4635"],
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
            rChart = new Chart("fractionChartR", {
                type: "pie",
                data: {
                    labels: ["Numerador", "Denominador"],
                    datasets: [{
                        backgroundColor: ["#de8a35", "#51de35"],
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
        }
        else {
            $(".sidebarRight").css("right", "-300px");
            console.log("DESTERUCTION !!!!!")
            aChart.destroy();
            bChart.destroy();
            rChart.destroy();
        }
    });
    $("#clearButton").click(function(){
        aChart.destroy();
        bChart.destroy();
        rChart.destroy();
    });
});