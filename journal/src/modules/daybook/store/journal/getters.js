
// export const myGetter = ( state ) => {
//  return state
// }


//en esta funcion retorna solo el estado
/* export const getEntriesByTerm = ( state ) => {
       return state.entries
} */
// en esta voy a retornar una nueva funcion
export const getEntriesByTerm = ( state ) => (terminorecibido = '') => {
       if (terminorecibido.length === 0) return state.entries 
        
        return state.entries.filter(entry => entry.text.toLowerCase().includes(terminorecibido.toLowerCase()))
}

export const getEntryById = ( state ) =>(id = '') => {
       
     
         
     const entries =  state.entries.find(entry =>   entry.id ===  id)
     if (!entries) return

     return { ...entries }
}



