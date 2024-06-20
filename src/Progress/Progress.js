function Progress (){
    return(
        <div>
            <div className="container">

           <div className="circle">
            <p className="bar">0/7</p>
           </div>

           <div>
            <div className="checkOne">
            <p classname="checkTwo">Чек лист</p>
            </div>
            <p className="done">Выполнено: 0 из 7 действий</p>
            <p className="next">Следующее действие: Созвониться с клиентом до 23.05.24 12:00</p>
           </div>

           <div>
            <button className="cta">Открыть чеклист</button>
           </div>
            </div>
   
    </div>
    )
}

export default Progress;