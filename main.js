const ctx = document.getElementById("ctx");
const ctx2 = document.getElementById("ctx2");

const chart = new Chart(ctx ,{
    type: "bar",
    data:{
        labels: ["Mo" ,"Tu" ,"We" ,"Fr" ,"Sa" ,"Su"],
        datasets: [{
            label: "Active houre" ,
            data: [4 ,3 ,3.5 ,3 ,5 ,3.25 ,1.5],
            backgroundColor: "#3c4452",
            borderWidth: 1,
            hoverBackgroundColor: "#90ccff",
        }]
    } ,
    options:{
        maintainAspectRatio: true,
        responsive: true,
        animations:{
            display: true,
            duration: 1000,
            easing: 'easeInQuad',
        } ,
        plugins: {
            legend: {
                display: false,
            }
        } ,
        scales:{
            y:{
                ticks:{
                    display: false,
                }
            }
        }
    }
});

const chart2 = new Chart(ctx2 ,{
    type: "line",
    data:{
        labels: ["Jan" ,"Feb" ,"Mar" ,"Apr" ,"May" ,"Jun" ,"Jul"],
        datasets: [{
            label: "Average grade" ,
            data: [6 ,10 ,8 ,14 ,6 ,7 ,4],
            tension: 0.4,
            borderColor: 'rgba(54 ,162 ,235)',
            fill: true,
            backgroundColor: 'rgba(54 ,162 ,235 ,0.15)',
        } ,
        {
            label: "Average grade in class" ,
            data: [8 ,6 ,7 ,6 ,11 ,8 ,10],
            tension: 0.4,
            borderColor: 'rgba(255 ,99 ,13)',
            fill: true,
            backgroundColor: 'rgba(255 ,99 ,13 ,0.15)',
        }
    ]
    } ,
    options :{
        responsive: true,
        maintainAspectRatio: true,
        plugins:{
            legend: {
                display: false,
            }
        } ,
        animations:{
            display: true,
            duration: 1000,
            easing: 'easeInOutQuad',
        } ,
        interaction: {
            mode: 'index' ,
            intersect: false
        },
        scales: {
            x:{
                title:{
                    display: true,
                    text: 'Months'
                } ,
                grid:{
                    display: false,
                },
                title:{
                    display: false,
                }
            } ,
            y:{
                beginAtZero: true,
                title:{
                    display: true,
                    text: 'Grades'
                },
                grid:{
                    display: true,
                } ,
                ticks:{
                    display: false,
                } ,
                border:{
                    display: false,
                    dash: [5 ,5]
                } ,
                title:{
                    display: false,
                }
            }
        }
    }
})