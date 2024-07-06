// src/components/ColorPicker.jsx
import React from "react";

function ColorPicker({ color, setColor, part, setPart }) {
  return (
    <div style={{ margin: "20px" }}>
      <label style={{ marginRight: "10px", fontSize: "18px" }}>
        Select Part:{" "}
      </label>
      <select value={part} onChange={(e) => setPart(e.target.value)}>
        <optgroup label="Body">
          <option value="Object_4">Carbon Fibre Parts</option>
          <option value="Object_6">Primary Color</option>
          <option value="Object_28">Secondary Color</option>
          <option value="Object_23">Body Kit</option>
          <option value="Object_30">Front Bumper</option>
        </optgroup>
        <optgroup label="Lights">
          <option value="Object_13">Head Lights</option>
          <option value="Object_17">Brake Lights</option>
          <option value="Object_22">Light Shades</option>
        </optgroup>
        <optgroup label="Wheels & Tires">
          <option value="Object_34">Tires</option>
          <option value="Object_32">Brake Calipers</option>
          <option value="Object_33">Alloy Wheels</option>
        </optgroup>
        <optgroup label="Windows & Tint">
          <option value="Object_25">Tint</option>
          <option value="Object_5">Front Grill</option>
        </optgroup>
      </select>
      <label
        style={{ marginLeft: "10px", marginRight: "10px", fontSize: "18px" }}
      >
        Color:{" "}
      </label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}

export default ColorPicker;
