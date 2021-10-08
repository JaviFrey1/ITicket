import react, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import DetalleCompra from "./DetalleCompra";

const BotonPrint = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <p ref={componentRef}>Print me</p>
      {/*<DetalleCompra ref={componentRef} />*/}
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default BotonPrint;
