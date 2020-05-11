export default (tmp)=>{
    const template = document.getElementById(tmp);
    document.body.innerHTML = template.innerHTML;
}