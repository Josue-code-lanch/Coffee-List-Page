export default function Votes({ status, vote }) {
  return (
    <>
      <div className="votes">
        <p>{status}</p>
        <p>{vote}</p>
      </div>
    </>
  );
}
