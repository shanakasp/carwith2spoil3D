import Button from "@mui/material/Button";
import { OrbitControls, PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import ColorPicker from "./component/ColorPicker";
import Model from "./component/Model";

function App() {
  const [color, setColor] = useState("#FFFFFF");
  const [selectedPart, setSelectedPart] = useState("Object_23");
  const [showSpoiler, setShowSpoiler] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const canvasRef = useRef(null);

  const handleRefresh = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  const handleToggleSpoiler = () => {
    setShowSpoiler((prevShowSpoiler) => !prevShowSpoiler);
  };

  return (
    <div>
      <ColorPicker
        color={color}
        setColor={setColor}
        part={selectedPart}
        setPart={setSelectedPart}
      />
      <Canvas
        ref={canvasRef}
        key={refreshKey}
        dpr={[1, 2]}
        shadows
        camera={{ fov: 45 }}
        style={{
          width: "90%",
          height: "80vh",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <color attach="background" args={["#101010"]} />
        <PresentationControls
          speed={0.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 6]}
        >
          <Stage environment={"night"}>
            <Model
              color={color}
              selectedPart={selectedPart}
              showSpoiler={showSpoiler}
              scale={0.01}
            />
          </Stage>
        </PresentationControls>
        <OrbitControls />
      </Canvas>
      <Button
        variant="contained"
        onClick={handleToggleSpoiler}
        style={{ marginTop: "20px", marginRight: "20px", alignItems: "right" }}
      >
        Toggle Body kit
      </Button>
      <Button
        variant="contained"
        onClick={handleRefresh}
        style={{ marginTop: "20px", alignItems: "right" }}
      >
        Refresh View
      </Button>
    </div>
  );
}

export default App;
