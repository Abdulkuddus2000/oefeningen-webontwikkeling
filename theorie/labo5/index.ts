// import { areaCircle, areaSquare, areaRectangle } from "./area";
import areaCircle from "./area"; // accolades mag je weglaten als je een default functie exporteert uit een module
import type{Person} from "./types" // dit importeert types.ts
console.log(areaCircle(2));