import React from "react";
import {Link} from "react-router-dom";

const ResearchTable = ({stock, addFavorStock}) => {
    return(
        <tr>
            <th scope="row">
                <button 
                    type="button"
                    class="btn btn-outline-danger" 
                    onClick={()=>{addFavorStock({
                        id:stock.id,
                        name: stock.name,
                        rate: stock.rate,
                        current_price: stock.current_price,
                        trading_volume: stock.trading_volume,
                        market_cap: stock.market_cap
                    })}}
                >Add</button>
            </th>
            <td>{stock.name}</td>
            <td>{stock.rate}</td>
            <td>{stock.current_price}</td>
            <td>{stock.trading_volume}</td>
            <td>{stock.market_cap}</td>
            <td><Link to={`/research/${stock.id}`}><button type="button" className="btn btn-secondary">Detail</button></Link></td>
        </tr>
    );
};

export default ResearchTable;