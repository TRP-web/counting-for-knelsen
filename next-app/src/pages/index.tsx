import React from "react"
import Form from "../components/Form"
import CustumValue from "../components/CustumValue"

export interface IForm {
  type: string
  volume: number
  numberofItems: number
}
const Index: React.FC = () => {
  const [forms, setForms] = React.useState<IForm[]>([])
  const [amount, setAmount] = React.useState<number>(0)

  React.useEffect(() => {
    let newAmount = 0
    forms.forEach((elem) => {
      newAmount += elem.numberofItems * elem.volume
    })
    setAmount(Number(newAmount.toFixed(2)))
  }, [forms])
  console.log(forms)
  return (
    <>
      <Form
        type="squer"
        volume={0.68}
        setForms={setForms}
      />
      <Form
        type="street light big"
        volume={1}
        setForms={setForms}
      />
      
      <h3 className="text-xl">Add a custum value</h3>
      <CustumValue setForms={setForms}/>

      <h2 className="text-3xl font-bold">Total Volume {amount}M<sup>3</sup></h2>
    </>
  )
}
export default Index