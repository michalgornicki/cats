function Database() {
    return (
      <Router>
        <div>
          <Navbar />
  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Team" element={<Database />} />
            <Route path="/Office" element={<Create />} />
          </Routes>
  
        </div>
      </Router>
    );
  }
  
  export default Database;