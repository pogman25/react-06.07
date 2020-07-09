import React, {useState} from "react";

const Message = (props) => {
    const [click, setClick] = useState(0);
    // не совсем понял что делать с useState здесь,
    // поэтому для разнообразия функционала повесил его на счетчик
    return <>
        <h1>Привет, {props.name}!!!</h1>
        <button onClick={props.addMessage}>addMessage</button>
        <button onClick={()=> setClick(click+1)}>КликМи</button>
        <span> Вы кликнули {click} раз </span>
        <ul>
            { props.messageArr.map((el, i) => <li key={i}>{el}</li> ) }
        </ul>


    </>

};
export default Message;


//6. * * Реализовать возможность отправки нового сообщения с фиксированным текстом:
// добавить кнопку;
// обрабатывать нажатие на кнопку функцией, которая
// добавляет в массив сообщений новое — например, с текстом «Нормально».
// функция-обработчик также должна делать перерендер DOM’а,
// чтобы новое сообщение не просто добавилось в массив, но и появилось у пользователя на странице.