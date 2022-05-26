import { COLLECTION_IMAGE } from "../../constants";
import "./style.css";

const Collection = () => {
    return (
        <>
            <div className="collection">
                <div className="container">
                    <div className="collage">
                        {COLLECTION_IMAGE.map((imgcard) => (
                            <div className="card image" key={imgcard.id}>
                                <div className="card-body">
                                    <img src={imgcard.image} alt={"card-image" + imgcard.id} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="content">
                        <h2>The Collection</h2>
                        <p>
                            Baby Jits is the first collection of Jits, with 4,444 unique and incredible avatars, living on the Ethereum blockchain. This collection embodies true adventurers always seeking out more and finding enjoyment in their lives through experience.
                        </p>
                        <p>
                            Your Baby Jit grants you access to a community collectively building a decentralized future together.  Baby Jit holders enjoy access to exclusive drops, experiences, and more. Additionally, future domains and perks will be unlocked through roadmap activation.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection;