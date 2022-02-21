// Set initial count equal to 0
let count = 0;

// Get the value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn) {
    //console.log(btn) *** This will grab all of the buttons
    btn.addEventListener('click', function(e) {
        //console.log(e.currentTarget.classList)  **** This will show the classes of the current target
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        } else if (styles.contains('increase')){
            count++;
        } else {
            count = 0
        }
        if (count > 0) {
            value.style.color = 'green'
        } else if (count < 0) {
            value.style.color = 'red'
        } else {
            value.style.color = ''
        }
        value.textContent = count;
    });
});