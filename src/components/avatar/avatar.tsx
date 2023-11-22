type Props = {
  size: string;
  src: string;
};

function Avatar({ size, src }: Props) {
  return (
    <div className="avatar" style={{ height: size }}>
      <img width={size} src={src} />
    </div>
  );
}

export default Avatar;
