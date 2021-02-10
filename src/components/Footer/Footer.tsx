import react from 'react';
import "./Footer.css";
const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>Thic themes inc</h4>
                        <ul className="list-unstyled">
                            <li>telefono</li>
                            <li>Peru, Lima</li>
                            <li>San basadre</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Stuff</h4>
                        <ul className="list-unstyled">
                            <li>telefono</li>
                            <li>Peru, Lima</li>
                            <li>San basadre</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h4>Google maps</h4>
                        <ul className="list-unstyled">
                            <li>telefono</li>
                            <li>Peru, Lima</li>
                            <li>San basadre</li>
                        </ul>
                    </div>
                </div>
                <hr /> 
                <div className="row">
                    <p className="col-sm">
                        {/* &copy;{new Date.getFullYear()} */} 
                        otras vainas inc | Con todos los derechos reservados | Términos y condiciones del servicio | Privacidad
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;