const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");


btn.forEach(function(button){
    console.log(button);
    button.addEventListener("click",function(e){

        //code using loop
        // if(e.target.id === "red"){
        //     body.style.backgroundColor = e.target.id;
        // }
        // else if(e.target.id === "yellow"){
        //     body.style.backgroundColor = e.target.id;
        // }
    
        // else if ( e.target.id === "green"){
        //     body.style.backgroundColor = e.target.id;
        // }
    
        // else if ( e.target.id === "orange"){
        //     body.style.backgroundColor = e.target.id;
        // }

        // else if ( e.target.id === "grey"){
        //     body.style.backgroundColor = e.target.id;
        // }


        //code using switch case
        switch(e.target.id){
            case "red":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow": 
                body.style.backgroundColor = e.target.id;
                break;      
            case "green":       
                body.style.backgroundColor = e.target.id;
                break;
            case "orange":      
                body.style.backgroundColor = e.target.id;
                break;
            case "grey":    
                body.style.backgroundColor = e.target.id;
                break;
            default:
                console.log("No color");
                break;         
        }
        
    });
});