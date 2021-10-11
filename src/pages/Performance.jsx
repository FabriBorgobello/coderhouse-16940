import * as React from "react";
// import ComponentePesado from "../components/ComponentePesado/ComponentePesado";
const loadComponent = () => import("../components/ComponentePesado/ComponentePesado");
const ComponentePesado = React.lazy(loadComponent);

const PerformancePage = () => {
  const [showComponent, setShowComponent] = React.useState(false);

  return (
    <div style={{ minHeight: "calc(100vh - 100px)", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <br />
      <h1 style={{ textAlign: "center" }}>React Performance</h1>
      <br />
      <button
        onMouseEnter={loadComponent}
        onFocus={loadComponent}
        onClick={() => setShowComponent((prevState) => !prevState)}
        style={{ padding: "1rem 2rem" }}>
        Componente pesado
      </button>
      <br />
      <React.Suspense fallback={<p>Loading...</p>}>{showComponent ? <ComponentePesado /> : null}</React.Suspense>
    </div>
  );
};

export default PerformancePage;
