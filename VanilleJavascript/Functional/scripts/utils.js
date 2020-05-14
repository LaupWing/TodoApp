export function removeChildNodes(container){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}