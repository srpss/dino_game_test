import { getCustomProperty, incrementCustomProperty, setCustomerProperty } from "./updateCustProperty.js"


const SPEED = .005
const groundElems = document.querySelectorAll("[data-ground]")


export function setupGround(){
    setCustomerProperty(groundElems[0], "--left", 0 )
    setCustomerProperty(groundElems[1], "--left", 300 )
}
export function updateGround(delta,speedScale) {
    groundElems.forEach(ground =>{
        incrementCustomProperty(ground,"--left",delta * speedScale *  SPEED * -1)

        if(getCustomProperty(ground, "--left") <= -300){
            incrementCustomProperty(ground,"--left", 600)
        }
    })
}