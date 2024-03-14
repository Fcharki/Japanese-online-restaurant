import React from 'react';
import '../App.css';

export default function Footer() {
    return (
        <div>
            <footer className="text-center text-white footer">
                <div className="container-fluid p-4 pb-0">
                    <section>
                        <form action="#" method="post">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <span className="pt-2">
                                        <strong>Sign up for new suggestions</strong>
                                    </span>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <label className="form-label" htmlFor="form5Example29">Email address</label>
                                        <input type="email" id="form5Example29" className="form-control" placeholder='Email ... '/>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
                <div className="text-center p-3 mx-3">
                    &copy;Fadma Charki 2024.
                </div>
            </footer>
        </div>
    )
}
