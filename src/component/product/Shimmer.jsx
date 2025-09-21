export default function Shimmer() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 5, 8, 1, 45, 12];
  return (
    <>
      <section className="container-fluid">
        <div className="row">
          {arr.map((id) => (
            <div className="col-md-3 mb-3" key={Math.random() * id}>
              <div className="card " style={{ width: "100%", height: "100%" }}>
                <div className="card-header" style={{ height: "320px" }}>
                  <img src="" alt="" />
                </div>
                <div
                  className="card-body text-center"
                  style={{ height: "130px" }}
                >
                  {""}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
