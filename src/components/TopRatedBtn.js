const TopRatedBtn = ({onFilter}) => {
    return (
        <div>
            <button className="top-rated-btn" onClick={onFilter}>Top Rated Restaurents</button>
        </div>
    )
}

export default TopRatedBtn;