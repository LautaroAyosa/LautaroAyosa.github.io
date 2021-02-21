import React from 'react';
import './Contact.css'

const Contact = () => {

    return (
        <div>
            <div className="otrosMedios rubik">
                <div>
                    <a href="https://wa.link/6teqlb" target="_blank"><img src=".\img\whatsapp logo.png" alt="whatsapp"/>
                    <phone>&nbsp;&nbsp; +54 011 36609100</phone></a>
                </div>
                <div>
                    <a href="mailto: SergioAyosa@hotmail.com" target="_blank"><img src=".\img\mail logo.png" alt="e-mail"/>
                    <e-mail>&nbsp;&nbsp; SergioAyosa@hotmail.com</e-mail></a>
                </div>
                <div className="-marg">
                    <a href="https://www.linkedin.com/in/sergio-ayosa-a792b216a/" target="_blank"><img src=".\img\linkedIn logo.png" alt="linkedIn"/>
                    <h4 className="rubik">&nbsp;&nbsp; Tintorería OMBÚ</h4></a>
                </div>
            </div>
            <div className="imgContacto">
                <img src=".\img\contactanos via mail.png" alt="contactanos via mail"/>
            </div>
            <div className="rubik">
                <div className="inferior">
                    <div className="enviado rubik"></div>
                    <form action="/contacto/send" method="post" className="contacto" id="contact-form">
                        <div className="contacto-content">
                            <input type="text" id="fname" name="name" autocomplete="off" required />
                            <label for="name" class="label-content">
                                <span className="content-default rubik">Nombre, Empresa</span>
                            </label>
                        </div>
                        <div className="contacto-content">
                            <input type="text" id="reason" name="reason" autocomplete="off" required />
                            <label for="reason" className="label-content">
                                <span className="content-default rubik">Razón</span>
                            </label>
                        </div>
                        <div className="contacto-content">
                            <input type="text" name="email" autocomplete="on" required/>
                            <label for="email" className="label-content">
                                <span className="content-default rubik">e-Mail</span>
                            </label>
                        </div>
                        <div className="contacto-mensaje">
                            <input type="text" name="mensaje" autocomplete="on" required/>
                            <label for="mensaje" className="label-mensaje">
                                <span className="content-default-mensaje rubik">Tu Mensaje</span>
                            </label>
                        </div>
                        <button type="submit" class="rubik contac">Enviar Mensaje</button>
                    </form>
                    <div id="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.1375498221496!2d-58.53286954175873!3d-34.64775479511204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc869d436d837%3A0x50768de9d8534a8e!2sOmb%C3%BA%203672%2C%20B1702CXD%20Ciudadela%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1613940337168!5m2!1ses!2sar" allowfullscreen="" loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;