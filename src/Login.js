import React from 'react';

const Login = (props) => {  
    const {
        email, 
        setEmail, 
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
    } = props;    

    return ( 
    <section className="login">
        <div className="loginContainer">
            <label>Correo</label>
            <input
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />    
            <p className="errorMsg">{emailError}</p>
            <label>Contraseña</label>
            <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <p className="errorMsg">{passwordError}</p>
            <div className ="btnContainer">
                {hasAccount ? ( 
                    <>
                    <button onClick={handleLogin}>Ingresar</button>
                    <p>
                        No tienes una cuenta?
                        <span onClick={() => setHasAccount(!hasAccount)}>Registrarse</span>
                        </p>
                    </>
                ) : (
                    <>
                    <button onClick={handleSignup}>Registrarse</button>
                    <p>Tienes una cuenta?
                     <span onClick={() => setHasAccount(!hasAccount)}>Ingresar</span>
                     </p>
                    </>     
                )}
            </div>    
        </div>        
    </section>  
    );
  };

  export default Login;