
import { Item } from '../@types/type'



export function getPbImageURL(item:Item,fileName = 'photo'){
  return `http://kindtiger.pockethost.io/api/files/${item.collectionId}/${item.id}/${item[fileName]}`
}



// function getPbImageURL<K extends keyof Item>(item:Item,fileName:K = 'photo' as K){
//   return `http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${item[fileName]}`
// }















