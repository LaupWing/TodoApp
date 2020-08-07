class Utils{
    static removChilds(container){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
    }
}