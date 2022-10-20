export default function Callout({ children, title, description, imageId }) {
  return (
    <div
      style={{
        padding: "0 1rem",
        background: "lightblue",
        border: "1px solid blue",
        borderRadius: "0.5rem",
      }}
    >
      <h2>{title}</h2>
      <b>{description}</b>
      <img src={imageId} />
      {children}
    </div>
  );
}
