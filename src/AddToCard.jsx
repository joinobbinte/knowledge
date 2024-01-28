

const AddToCard = ({addCard}) => {
    const {id,title, price, hour} = addCard
    return (
        <div>
            <li>{title}</li>
        </div>
    );
};

export default AddToCard;