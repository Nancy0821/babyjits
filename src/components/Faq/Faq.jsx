import { useState } from "react";
import "./style.css";

const Faq = () => {

    const [flag, setFlag] = useState(false);
    const [num, setNum] = useState();

    function changeFlag(idx) {
        setNum(idx);
        setFlag(!flag);
    }

    return (
        <div className="faq">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="card faq-item" >
                    <div className="card-body">
                        <div className={num === 1 && flag ? 'question expanded' : 'question'} onClick={() => changeFlag(1)}>Mint Date and Supply?</div>
                        <div className={num === 1 && flag ? 'answer expanded' : 'answer'}>
                            <div className="answer-container">
                                The mint date has not yet been revealed, so stay tuned!<br /><br />

                                The total supply is 9999 Baby Jits, priced at 0.3 ETH.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card faq-item">
                    <div className="card-body">
                        <div className={num === 2 && flag ? 'question expanded' : 'question'} onClick={() => changeFlag(2)}> What blockchain is it on?</div>
                        <div className={num === 2 && flag ? 'answer expanded' : 'answer'}>
                            <div className="answer-container">

                                The ERC-721 token is on the Ethereum Blockchain.

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Faq;