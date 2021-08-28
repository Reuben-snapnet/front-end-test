import { useState } from 'react'
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const Feeds = ({article}) => {
    
    const [piece, setPiece] = useState("")
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const handleClick = () => {
        setPiece(article)
        onOpenModal()
    }
    return (
        <div>
            <div className="space-y-3 border border-black p-5 cursor-pointer" onClick={handleClick}>
            
                <h1 className="text-2xl font-bold">{article.title}</h1>
                <p>{article.description}</p>
                <p>@{article.time} on {article.date}</p>
                
            </div>

            

            <div>
                <Modal 
                open={open} 
                onClose={onCloseModal} 
                center 
                classNames={{
                    modal: 'customModal',
                }}
                >
                <div className="p-3 flex flex-col space-y-4">
                    <h1 className="text-2xl font-bold">{article.title}</h1>
                    <p>{article.description}</p>
                    <p>@{article.time} on {article.date} at {article.loaction}</p>
                    <p>{article.petsAllowed ? "Pets are allowed" : "Pets are not Allowed"}</p>
                    <p>Organized by {article.organizer}</p>
                </div>
                </Modal>
            </div>
        
        </div>

    )
}

export default Feeds
