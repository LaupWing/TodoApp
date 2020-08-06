export default ()=>{
    const links = document.querySelectorAll('.login a');
    links.forEach(link=>{
        link.addEventListener('click', e =>{
            e.preventDefault();
                document
                    .querySelector('.login_form')
                    .classList
                    .toggle('hidden');
                document
                    .querySelector('.signup_form')
                    .classList
                    .toggle('hidden');
        });
    });
}