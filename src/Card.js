import { useState } from 'react';
import './Card.css';
import './color.css'
import Pedro from "./img/Pedro.gif"
import Cat from "./img/кот.png";

function Card({cat}) {

    
    const [showModal, setShowModal] = useState(false)
    const changeModal = () => {
        setShowModal(!showModal)
    }


  return (
    <>
        <div className="CardBox">
            <div onClick={changeModal} className='cat-name'>{cat.name}</div>

        <img src={`https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`}  className='cat-image'/> 
        </div>
        {showModal && <Modal cat={cat} changeModal={changeModal}/>}
    </>
  );
}

function Modal({cat, changeModal}) {
    return (
        <div className='ModalContainer'>
            <div className='Modal' >
                <div className='modal-header'>
                    <button onClick={changeModal}>x</button>
                </div>
                <div className='modal-body'>
                    <p className='card-cat-name'>{cat.name}</p>
                    <p>{cat.description}</p>
                    

                </div>

            </div>
        </div>
    )
}

export default Card;