import './Square.css'

export const Square = ({cor}) => {
    return (
        <div className="square" style={{ backgroundColor: cor}}></div>
    )
}

export default Square;