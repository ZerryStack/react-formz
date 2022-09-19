import React from "react";

interface ExpoSnackProps {
  id: string;
  style?: React.CSSProperties
}

const ExpoSnack = ({ id, style }: ExpoSnackProps) => {
  return (
    <>
      <iframe
        style={{
          overflow: "hidden",
          background: "#212121",
          border: "1px solid var(--color-border)",
          borderRadius: "4px",
          height: 505,
          width: "100%",
          ...style
        }}
        src={`https://snack.expo.dev/embedded/${id}?preview=true&platform=web&theme=dark`}
      />
    </>
  );
};

export default ExpoSnack;
