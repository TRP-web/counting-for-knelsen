import React from "react"
import { IForm } from "../pages"
interface ICustumValueProps {
   setForms: React.Dispatch<React.SetStateAction<IForm[]>>
}
const CustumValue: React.FC<ICustumValueProps> = ({ setForms }) => {
   const [volume, setVolume] = React.useState<number>()
   const [numberofItems, setNuberofItems] = React.useState<number>(1)
   return (
      <>
         <input
            className="h-10 mr-2 border border-gray-300 p-2"
            type="number"
            value={volume}
            placeholder="olume"
            onChange={(e) => {
               setVolume(Number(e.target.value))
            }} />
         <input
            className="h-10 mr-2 border border-gray-300 p-2"
            type="number"
            value={numberofItems}
            placeholder="Number of items"
            onChange={(e) => {
               setNuberofItems(Number(e.target.value))
            }} />
         <button
            className="bg-green-600 text-xl rounded text-white p-2"
            onClick={() => {
               if (typeof numberofItems == "number" && typeof numberofItems == "number") {
                  setForms(array => {
                     const newArray = [...array]
                     newArray.push({
                        numberofItems,
                        type: "custum",
                        volume
                     })
                     return newArray
                  })
               }
            }}
         >Add +</button>
      </>
   )
}
export default CustumValue