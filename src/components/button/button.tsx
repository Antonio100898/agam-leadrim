type Props = {
  paddingX?: string;
  borderColor?: string;
  backgroundColor?: string;
  children: React.ReactNode;
  onClick: () => void;
};

function AppButton({
  backgroundColor,
  borderColor,
  paddingX,
  children,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="app-button"
      style={{
        backgroundColor: backgroundColor,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        border: `${borderColor} 2px solid`,
        borderRadius: "5px",
        fontWeight: "bold",
      }}
    >
      {children}
    </button>
  );
}

export default AppButton;
