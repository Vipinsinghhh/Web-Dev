const form = document.querySelector('form');

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value) 

form.addEventListener('submit',function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if(height < 0 || height === '' || isNaN(height)){
        result.innerHTML = 'please enter a valid height'
    }else if (weight < 0 || weight === '' || isNaN(weight)){
        result.innerHTML = 'please enter a valid weight'
    }else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>your BMI is: ${BMI}<br></span>`

        const guide = document.createElement('span')
        if(BMI < 18.6){
            guide.innerHTML = 'You are UnderWeight'
        }else if(BMI >18.6 && BMI <24.9){
            guide.innerHTML = 'you are in normal range'
        }else {
            guide.innerHTML = 'you are overweight'
        }
        result.appendChild(guide)
    }
})