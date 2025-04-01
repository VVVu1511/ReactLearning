import styles from './List.module.css'
import PropTypes from 'prop-types';

function List({items = [], category = ""}){
    const itemList = items;

    itemList.sort((a,b) => b.calories - a.calories);
        
    const lowCalFruit = itemList.filter((fruit) => fruit.calories < 100);

    const listItems = itemList.map(fruit => <li key={fruit.id}>
                                                {fruit.name}: &nbsp;
                                                <b>{fruit.calories}</b></li>);
    return (
    <>
        <h3 className={styles.listCategory}>{category}</h3>
        <ol className={styles.listItem}>{listItems}</ol>
    </>

    );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                            name: PropTypes.string,
                                            calories: PropTypes.number})),
}

List.defaultProps = {
    category: "Category",
    items: [],
}


export default List;