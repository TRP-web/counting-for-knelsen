import React from "react"
import { IForm } from "../pages";

interface IFormProps {
   volume: number
   type: string
   setForms: React.Dispatch<React.SetStateAction<IForm[]>>
}

const Form: React.FC<IFormProps> = ({ type, volume, setForms }) => {
   const [numberofItems, setNuberofItems] = React.useState<number>(1)
   return (
      <div className="flex items-center mb-4">
         <strong className="block mr-4 text-2xl">{volume}M<sup>3</sup></strong>
         <input
            className="h-10 mr-2 border border-gray-300 p-2"
            type="number" value={numberofItems}
            placeholder="number of items"
            onChange={(e) => {
               setNuberofItems(Number(e.target.value))
            }} />
         <button
            className="bg-green-600 text-xl rounded text-white p-2"
            onClick={() => {
               setForms(array => {
                  const newArray = [...array]
                  newArray.push({
                     numberofItems,
                     type,
                     volume
                  })
                  return newArray
               })
            }}
         >Add +</button>
      </div>
   )
}
export default Form