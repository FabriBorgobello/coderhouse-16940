import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import Fruta from "../components/Fruta/Fruta";

const FruitsPage = () => {
  return (
    <div style={{ minHeight: "calc(100vh - 100px)" }}>
      <ErrorBoundary FallbackComponent={ErrorUI2}>
        <h1>Esta es una página en donde muestro frutas.</h1>
        <ErrorBoundary FallbackComponent={ErrorUI}>
          <Fruta name="Manzana" />
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={ErrorUI}>
          <Fruta name="Banana" />
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={ErrorUI}>
          <Fruta name="Naranja" />
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={ErrorUI}>
          <Fruta name="Lechuga" />
        </ErrorBoundary>{" "}
      </ErrorBoundary>
    </div>
  );
};

export default FruitsPage;

const ErrorUI = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      Ha habido un error en este componente:
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Intentar nuevamente</button>
    </div>
  );
};
const ErrorUI2 = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      Esto viene del EB de la página
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Intentar nuevamente</button>
    </div>
  );
};
