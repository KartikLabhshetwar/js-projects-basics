const form = document.querySelector('form');

form.addEventListener('submit',function(i){
    i.preventDefault();

    const ht = parseInt(document.querySelector('#height').value);
    const wt = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(ht === "" || ht <0 || isNaN(ht) ){
        result.innerHTML = `Please enter valid height ${ht}`;
    }
    else if(wt === "" || wt <0 || isNaN(wt) ){
        result.innerHTML = `Please enter valid weight ${wt}`;
    }else {
        const bmi = (wt / ((ht * ht)/10000)).toFixed(2);
        //show the result
        result.innerHTML = `<span>${bmi}</span>`;
        if(bmi < 18.5){
            result.innerHTML = `<span>${bmi}</span> (Underweight)`;
        } else if (bmi >= 18.5 && bmi <= 24.9){
            result.innerHTML = `<span>${bmi}</span> (Normal)`;
        } else{
            result.innerHTML = `<span>${bmi}</span> (Overweight)`;
        }
    }
});
