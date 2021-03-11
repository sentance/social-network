export const updateObjectinArray = (items, itemId, objPropName, newObjProps)=>{

   return items.map(users=>{
        
        if(users[objPropName] === itemId){
            return {...users, ...newObjProps}
        }
        return users;
    })
}