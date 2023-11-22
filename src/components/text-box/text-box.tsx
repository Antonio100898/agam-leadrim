type Props = {
  text: string;
  style?: React.CSSProperties | undefined
};

function TextBox({ text, style }: Props) {
  return (
    <div className="text-box-wrapper" style={{padding: "2px 0 2px 0", ...style}}>
      <div className="text-box-text">{text}</div>
    </div>
  );
}

export default TextBox;
