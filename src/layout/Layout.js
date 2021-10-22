function Layout() {
  const shootDart = (points) => {
    alert(`You got ${points} points`);
  };

  return (
    <div className="layout">
      <button className="btn btn-outline me-2" onClick={() => shootDart(1)}>Shoot white</button>
      <button className="btn btn-success me-2" onClick={() => shootDart(5)}>Shoot green</button>
      <button className="btn btn-danger" onClick={() => shootDart(10)}>Shoot red</button>
    </div>
  );
}

export default Layout;
