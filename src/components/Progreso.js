import { Lectura } from "./Lectura"
import { Grafica } from "./Grafica";
import { Barras } from "./Barras";
import { View } from "native-base";

const data1 = [0, 0.2, 0.23, 0.34, 0.5, 0.51, 0.54, 0.6, 0.65, 0.64, 0.71, 0.8, 0.9, 1]

export const Progreso = ({lim}) => {
  const limite = parseInt(lim);
  return (
    <>
      <Lectura/>
      <Grafica datos={data1}/>
      <Barras datos={data1}/>
    </>
  );
}