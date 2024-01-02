import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SingleCryptoInfo } from '../SingleCryptoInfo/SingleCryptoInfo';
import './CurrCryptoInfo.css';

export const CurrCryptoInfo = () => {
    const [cryptoCoins, setCryptoCoins] = useState([]);
    const [limit, setLimit] = useState(20);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCryptoCoins = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://api.coincap.io/v2/assets/?limit=${limit}`);
                setCryptoCoins(response.data.data);
            } catch (error) {
                console.log(error.message);
                setError('Something went wrong!!');
            } finally {
                setIsLoading(false);
            }
        };

        fetchCryptoCoins();
    }, [limit]);

    return (
        <>
            <section className='crypto__container'>
                <table className='crypto__table'>
                    <thead>
                        <tr className='crypto__header__row'>
                            <td className='crypto__info'>Rank</td>
                            <td className='crypto__info crypto__name'>Name</td>
                            <td className='crypto__info'>Price</td>
                            <td className='crypto__info'>Market Cap</td>
                            <td className='crypto__info'>VWAP (24Hr)</td>
                            <td className='crypto__info'>Supply</td>
                            <td className='crypto__info'>Volume (24Hr)</td>
                            <td className='crypto__info'>Change (24Hr)</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cryptoCoins.map((cryptoCoin) => (
                            <SingleCryptoInfo key={cryptoCoin.id} cryptoCoin={cryptoCoin} />
                        ))}
                    </tbody>
                </table>
            </section>
            <div className='more'>
                <button onClick={() => setLimit((prevPage) => prevPage + 20)} className='btn'>
                    {isLoading ? 'Loading...' : 'View More'}
                </button>
            </div>
        </>
    );
};
