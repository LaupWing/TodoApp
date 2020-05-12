export default (tmp)=>{
    const template = document.getElementById(tmp);
    document.querySelector('#app').innerHTML = template.innerHTML;
}