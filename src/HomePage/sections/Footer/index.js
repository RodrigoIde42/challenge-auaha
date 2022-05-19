import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <footer>
            <div className="footerContent">
                <div className="contact-inst-help">
                    <div className="contact">
                        <h4>Contato</h4>
                        <p><i className="far fa-clock" /> Das 9:00 as 17:00</p>
                        <p><i className="fab fa-whatsapp" /> (11) 98751-2918</p>
                        <p><i className="far fa-envelope" /> vendas@surijoias.com.br</p>
                    </div>
                    <div className="institutional">
                        <h4>Institucional</h4>
                        <p>Sobre nós</p>
                        <p>Trocas e Devoluções</p>
                        <p>Entregas e Prazos</p>
                        <p>Blog</p>
                    </div>
                    <div className="help">
                        <h4>Ajuda</h4>
                        <p>Contato</p>
                        <p>Tire suas dúvidas</p>
                        <p>Garantias e Cuidados</p>
                    </div>
                </div>
                <div className="payment-followUs">
                    <div className="payment">
                        <h4>Pagamento</h4>
                        <div className="paymentIcons">
                            <i className="fab fa-cc-visa"></i>
                            <i className="fab fa-cc-mastercard"></i>
                            <i className="fab fa-cc-diners-club"></i>
                            <i className="fab fa-cc-amex"></i>
                            <i className="fab fa-cc-amazon-pay"></i>
                            <i className="fab fa-cc-discover"></i>
                            <i className="fab fa-cc-paypal"></i>
                            <i className="fab fa-cc-apple-pay"></i>
                        </div>
                    </div>
                    <div className="followUs">
                        <h4>Siga-nos</h4>
                        <div className="icons">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-whatsapp"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyrightContainer">
                <p>
                    © SURI JOIAS. Proibida reprodução total ou parcial. 
                    Preços e estoques sujeitos à alteração sem aviso prévio -
                    CNPJ: 00.680.164.0001/07 - R.Exemplo, 00, Bairro Exemplo, Exemplo, EX
                </p>
            </div>
        </footer>
    )
}