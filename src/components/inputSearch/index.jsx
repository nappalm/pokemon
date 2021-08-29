import SearchIcon from 'assets/icons/Search.svg';
import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputSearchStyled = styled.div`
  display: block;
  .input-content {
    box-shadow: var(--shadow);
    display: flex;
    align-items: center;
    border-radius: var(--border-radius);
    input {
      border-radius: var(--border-radius);
      border: 0;
      height: 100%;
      padding: 7px 12px;
      outline: none;
      width: 100%;
    }
    button {
      border: 0;
      background-color: var(--blue);
      border-radius: var(--border-radius);
      height: 100%;
      padding: 7px 15px;
      cursor: pointer;
      display: flex;
      align-items: center;
      .icon-search {
        height: 16px;
      }

    }
  }
`;
const InputSearch = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const onInputChange = ({ target }) => {
    setSearch(target.value);
  };

  const onInputKey = ({ key, target }) => {
    if (key === 'Enter') {
      onSearch(target.value);
    }
  };

  const onClickSearch = () => {
    onSearch(search);
  };

  return (
    <InputSearchStyled className="input-search">
      <div className="input-content">
        <input
          onKeyDown={onInputKey}
          onChange={onInputChange}
          placeholder="Search"
        />
        <div className="search-button">
          <button
            onClick={onClickSearch}
            type="button"
          >
            <img
              className="icon-search"
              src={SearchIcon}
              alt="icon-search"
            />
          </button>
        </div>
      </div>
    </InputSearchStyled>
  );
};

InputSearch.defaultProps = {
  onSearch: () => {},
};

InputSearch.propTypes = {
  onSearch: PropTypes.func,
};

export default InputSearch;
