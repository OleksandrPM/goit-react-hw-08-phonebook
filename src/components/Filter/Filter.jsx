import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectors';
import { selectItems } from 'redux/contacts/contactsSelectors';
import css from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const items = useSelector(selectItems);

  const dispatch = useDispatch();

  const onChange = event => {
    sendFilter(event.target.value);
  };

  const sendFilter = value => {
    dispatch(setFilter(value));
  };

  return (
    items.length > 0 && (
      <div className={css.filter}>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={filter}
          onChange={onChange}
          className={css.filter__input}
        ></input>
      </div>
    )
  );
}
