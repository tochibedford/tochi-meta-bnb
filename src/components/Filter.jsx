import styles from '../styles/Filter.module.scss'
import filterIcon from '../assets/filter.svg'
import { useEffect, useRef, useState } from 'react';

const Filter = ({ options }) => {
    const dropDownToggleRef = useRef(null)
    const [filterSelection, setFilterSelection] = useState("Location")
    
    useEffect(()=>{
        const handleClick = (e)=>{
            if(e.target === dropDownToggleRef.current) return
            if(e.target.closest(styles.dropdown)) {
                dropDownToggleRef.current.checked = !dropDownToggleRef.current.checked
            }

            dropDownToggleRef.current.checked = false
        }

        document.addEventListener('click', handleClick)

        return ()=>{
            document.removeEventListener('click', handleClick)
        }
    }, [])

    return (
        <div className={styles.filter__container}>
            <ul className={styles.verbose__options}>
                {options.map((opt, index) => {
                    return (
                        <li key={"filter__options__" + index}>
                            {opt}
                        </li>
                    )
                })}
            </ul>
            <div className={styles.dropdown}>
                <input ref={dropDownToggleRef} type="checkbox" name="filter"/>
                <ul className={styles.custom__dropdown__filter} ariarole="listbox" tabIndex="-1">
                    <li className={styles.custom__dropdown__filter__selected} ariaselected="true">
                        <div className={styles.custom__dropdown__filter__selected__text}>{filterSelection}</div>
                        <div className={styles.custom__dropdown__filter__selected__image__container}>
                            <img src={filterIcon} alt="filter icon" />
                        </div>
                    </li>
                    <li className={styles.custom__dropdown__filter__options}>
                        <ul ariarole="listbox" className={styles.custom__dropdown__filter__options__inner__container}>
                            {options.map((opt, index) => {
                                return (
                                    <li key={"filter__options__" + index} className={styles.custom__dropdown__inner__option} onClick={()=>setFilterSelection(opt)}>
                                        {opt}
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Filter;