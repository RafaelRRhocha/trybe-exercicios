import { Component } from "react";
import { InputForms } from "./components/InputForms";
import { DadosEmprego } from "./DadosEmprego";

export class Form extends Component {
  render() {
    return (
      <>
        <InputForms />
        <DadosEmprego />
      </>
    )
  }
}
