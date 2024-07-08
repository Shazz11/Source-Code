const endDate = "26 July 2024  12:00 PM";    //we create a var "endDate" and give it some value 

document.querySelector("#end-date").innerText = endDate;    //we target our title that we made in HTML and we can change our title dynamicly

const inputs = document.querySelectorAll("input")   //here we select all the inputs that will we use for show day and time

function clock(){
    const end = new Date(endDate);      //our last date 
    const now = new Date( );             //that means today's date
    const diff = (end - now) / 1000;    //in this line of code we make mili seconds in seconds bcz JS calculate time in mili Sec 

    if(diff < 0){
        return;
    }

    //convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    //convert into hours
    inputs[1].value = Math.floor(diff / 3600 ) % 24;
    //convert into minutes
    inputs[2].value = Math.floor(diff / 60 ) % 60;
    //convert into seconds
    inputs[3].value = Math.floor(diff) % 60;

}

clock();    //initial call

//it call "clock()" function automaticly in every 1 second
setInterval(
    ()=>{
        clock();
    }, 1000
)