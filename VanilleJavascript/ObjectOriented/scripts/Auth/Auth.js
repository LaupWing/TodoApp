export default class Auth{
    constructor(){
        this.template = document.querySelector('#login');
        this.render();
    }
    render(){
        document.querySelector('#app').innerHTML = this.template.innerHTML;
    }
}