const Customer = () => {
    return(
        <div className="content-container">

        <h1><i className="bi bi-speedometer2"></i>Customer</h1>
        <div className="container-area mt-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  
                  <div className="row mb-3">
                    <div className="col-md-2">
                      <div className="tp-title">
                        <b>Sort by</b>
                      </div>                    
                      <select className="form-select" aria-label="Sort">
                        <option selected>Sort by</option>
                        <option value="1">Name (A-Z)</option>
                        <option value="2">Name (Z-A)</option>
                        <option value="3">Date (Newest)</option>
                        <option value="4">Date (Oldest)</option>
                        <option value="5">Active</option>                      
                        <option value="6">Inactive</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <div className="tp-title">
                        <b>Cleanup</b>
                      </div>
                      <input type="date" className="form-control" placeholder="dd/mm/yyyy" aria-label="Cleanup" />
                    </div>
                    <div className="col-md-2">
                      <div className="tp-title">
                        <b>Status</b>
                      </div>  
                      <select className="form-select" aria-label="Status">
                        <option selected>Any</option>
                        <option value="1">Clean</option>
                        <option value="2">Error</option>
                        <option value="3">Unchecked</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <div className="tp-title">
                        <b>Definitions</b>
                      </div>  
                      <div className="d-flex  flex-wrap">
                        <div className="form-check pe-1">
                          <input className="form-check-input" type="checkbox" value="" id="SMS" />
                          <label className="form-check-label" for="SMS">
                           SMS
                          </label>
                        </div>
                        <div className="form-check pe-1">
                          <input className="form-check-input" type="checkbox" value="" id="email" checked="" />
                          <label className="form-check-label" for="email">
                            Email
                          </label>
                        </div>
                        <div className="form-check pe-1">
                          <input className="form-check-input" type="checkbox" value="" id="directmail" checked="" />
                          <label className="form-check-label" for="directmail">
                         Direct Mail
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="tp-title">
                        <b>Delivered Date</b>
                      </div>  
                      <input type="date" className="form-control" placeholder="dd/mm/yyyy" aria-label="Input Delivered Date" />
                    </div>
                    <div className="col-md-2">
                      <div className="tp-title">
                        <b>Search</b>
                      </div>  
                      <div className="input-group me-2">
                        <div className="form-outline w-100" data-mdb-input-init="">
                          <input id="search-input" type="search" className="form-control" placeholder="Search" />  
                          </div>
                        <span id="search-button" className="btn btn-danger position-absolute end-0">
                          <i className="bi bi-search"></i>
                        </span>              
                      </div>
                    </div>
                  </div>
  
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Customer ID</th>
                        <th>Shop Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Input Date</th>                      
                        <th>Delivery Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Smitty's Body Shop</td>
                        <td>mike.meyer@cox.net</td>
                        <td><span className="badge bg-danger">Error</span></td>
                        <td>24-07-2024</td>
                        <td>24-09-2024</td>
                        <td>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      
                      <tr>
                        <td>2.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Smitty's Body Shop</td>
                        <td>mike.meyer@cox.net</td>
                        <td><span className="badge bg-success">Clean</span></td>
                        <td>24-07-2024</td>
                        <td>24-09-2024</td>
                        <td>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr> 
                        <td>3.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Smitty's Body Shop</td>
                        <td>mike.meyer@cox.net</td>
                        <td><span className="badge bg-warning">Unchecked</span></td>
                        <td>24-07-2024</td>
                        <td>24-09-2024</td>
                        <td>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr> 
                        <td>4.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Smitty's Body Shop</td>
                        <td>mike.meyer@cox.net</td>
                        <td><span className="badge bg-danger">Error</span></td>
                        <td>24-07-2024</td>
                        <td>24-09-2024</td>
                        <td>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>5.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Smitty's Body Shop</td>
                        <td>mike.meyer@cox.net</td>
                        <td><span className="badge bg-success">clean</span></td>
                        <td>24-07-2024</td>
                        <td>24-09-2024</td>
                        <td>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                        </td>
                      </tr>
                      <tr>
                        <td>6.</td>
                        <td>Dunn Nicole</td>
                        <td>7517F594</td>
                        <td>Smitty's Body Shop</td>
                        <td>mike.meyer@cox.net</td>
                        <td><span className="badge bg-warning">Unchecked</span></td>
                        <td>24-07-2024</td>
                        <td>24-09-2024</td>
                        <td>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-file-earmark-pdf"></i></button>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-eye"></i></button>
                          <button className="btn btn-sm btn-outline-danger p-1"><i className="bi bi-trash3"></i></button>
                        </td>
                      </tr> 
                    </tbody>
                  </table>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <button className="btn btn-danger">View All</button>
                </div>
              </div>
            </div>
          </div>
  
        </div>
  
      </div>


    );
}
export default Customer

