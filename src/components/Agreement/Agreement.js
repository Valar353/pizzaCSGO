import React from 'react';
import style from './Agreement.module.scss';

export default class Agreement extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <h2>УСЛОВИЯ ИСПОЛЬЗОВАНИЯ СЕРВИСА PIZZACSGO</h2>
                <p>
                    Сайт pizzacsgo.com с одной стороны, и лицо, акцептовавшее оферту, размещенную в сети Интернет по постоянному адресу https://pizzacsgo.com/???/, с другой стороны, заключили настоящее пользовательское соглашение о нижеследующем.
                </p>
                <h3>ОБЩАЯ ИНФОРМАЦИЯ</h3>
                <p>
                    В настоящем пользовательском соглашении, если из текста прямо не вытекает иное, следующие термины будут иметь указанные ниже значения:
                    <p>
                        «Администрация» - создатели или руководители сайта.
                    </p>
                </p>
            </div>
        );
    }


}
