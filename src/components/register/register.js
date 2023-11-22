export default function Register({ Mode }) {
    return (
        <div className="login-form-container">
        <form className="login-form">
            <div className="login-form-content">
                <h3 className="login-form-title">Register</h3>
                <div className="text-center">
                    Already registered?{" "}
                    <span className="link-primary" onClick={Mode}>
                    Sign In
                    </span>
                </div>
                <div className="form-group mt-3">
                    <label>Full Name</label>
                    <input
                    type="text"
                    autoComplete="name"
                    className="form-control mt-1"
                    placeholder="Enter Full Name"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input
                    type="email"
                    autoComplete="username"
                    className="form-control mt-1"
                    placeholder="Email Address"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Date of Birth</label>
                    <input
                    type="date"
                    className="form-control mt-1"
                    placeholder="Enter Date of birth"
                    />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input
                    type="password"
                    autoComplete="new-password"
                    className="form-control mt-1"
                    placeholder="Password"
                    />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit" className="btn btn-success">
                    Register
                    </button>
                </div>
            </div>
        </form>
        </div>
    )
}
