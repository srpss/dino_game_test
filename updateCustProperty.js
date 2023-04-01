export function getCustomProperty(elem, prop){
    return parseFloat(getComputedStyle(elem).getPropertyValue(prop))|| 0
}

export function setCustomerProperty(elem, prop, value){
elem.style.setProperty(prop,value)

}

export function incrementCustomProperty(elem,prop,inc){
setCustomerProperty(elem,prop,getCustomProperty(elem,prop) + inc)
}