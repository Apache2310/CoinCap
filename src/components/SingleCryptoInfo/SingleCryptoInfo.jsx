import React from 'react'


export const SingleCryptoInfo = ({ cryptoCoin }) => {
    const {
        rank,
        name,
        symbol,
        priceUsd,
        marketCapUsd,
        vwap24Hr,
        supply,
        volumeUsd24Hr,
        changePercent24Hr,
    } = cryptoCoin

    // Rounding Off values
    // const price = Number(priceUsd).toFixed(2)
    // const marketCap = Math.abs(Number(marketCapUsd)) >= 1.0e+9 ? (Math.abs(Number(marketCapUsd)) / 1.0e+9).toFixed(2) + "b" : 0
    // const volume = Math.abs(Number(volumeUsd24Hr)) >= 1.0e+9 ? (Math.abs(Number(volumeUsd24Hr)) / 1.0e+9).toFixed(2) + "b" : 0
    // const Supply = Math.abs(Number(supply)) >= 1.0e+6 ? (Math.abs(Number(supply)) / 1.0e+6).toFixed(2) + "m" : 0
    // const changePer24Hr = Number(changePercent24Hr).toFixed(2)
    // const vwap24 = Number(vwap24Hr).toFixed(2)

    function formatNumber(num){
        if(num > 999999999){
            return (num / 1000000000).toFixed(2) + "b";
    }else if(num >999999){
        return (num/1000000).toFixed(2)+ "m";
    }else{
        return num.toFixed(2);
    }
}


    return (
        <tr className='crypto__body__row'>
            <td className='cypto__info py-3'>{rank}</td>
            <td className='cypto__info py-3 crypto__flex'>
                <img className='crypto__img' src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`} alt="logo" />
                <div className='crypto__flex__col'>
                    <span className='bold'>{name}</span>
                    <small>{symbol}</small>
                </div>
            </td>
            <td className='crypto__info py-3'>
                ${parseFloat(priceUsd).toFixed(2)}
            </td>
            <td className='crypto__info py-3'>
                ${formatNumber(parseFloat(marketCapUsd))}
            </td>
            <td className='crypto__info py-3'>
                ${formatNumber(parseFloat(vwap24Hr))}
            </td>
            <td className='crypto__info py-3'>
                {formatNumber(parseFloat(supply))}
            </td>
            <td className='crypto__info py-3'>
                ${formatNumber(parseFloat(volumeUsd24Hr))}
            </td>
            <td className={changePercent24Hr < 0 ? `crypto__info py-3` : `crypto__info py-3`}>
                {formatNumber(parseFloat(changePercent24Hr))}%
            </td>
        </tr>
    )
}
