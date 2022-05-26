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
                                The mint goes live at 8pm EST, July 2nd. The pre-sale will last for 6 hours, and end at 11pm ET. Public sale will begin immediately after pre-sale closes.<br /><br />

                                The total supply is 4444 Baby Jits, priced at 0.25 ETH.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card faq-item">
                    <div className="card-body">
                        <div className={num === 2 && flag ? 'question expanded' : 'question'} onClick={() => changeFlag(2)}> Whitelist? </div>
                        <div className={num === 2 && flag ? 'answer expanded' : 'answer'}>
                            <div className="answer-container">
                                The whitelist will allow for 3 mints per wallet at 0.2 ETH.

                            </div>
                        </div>
                    </div>
                </div>

                <div className="card faq-item">
                    <div className="card-body">
                        <div className={num === 3 && flag ? 'question expanded' : 'question'} onClick={() => changeFlag(3)}> What blockchain is it on?</div>
                        <div className={num === 3 && flag ? 'answer expanded' : 'answer'}>
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