window.onload = () => {
    const transition_el = document.querySelector('.transition');
    //selects all buttons
    const anchors = document.querySelectorAll('.trans')
    //the actual transition
    setTimeout(() => {
        //activates the transition
        transition_el.classList.remove('is-active');
    }, 500);
    //for loop for all the buttons
    for(let i = 0; i <anchors.length; i++){
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            console.log(target);
            //activates the transition page
            transition_el.classList.add('is-active');
            //loads screen
            setTimeout(() =>{
                window.location.href = target;
            }, 500)
        })
    }
}