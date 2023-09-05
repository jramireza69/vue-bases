const getRandonInt = () => {

    return new Promise( resolve => {
        // const rndInt = (Math.random() * 20) + 1 tiene muchos decimales 
        const rndInt = Math.floor((Math.random() * 20) + 1)  //para redondeo 
        
        setTimeout(() => {
            resolve (rndInt)
        }, 3000);
    })
}


export default getRandonInt