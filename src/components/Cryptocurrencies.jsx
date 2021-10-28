import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd'; 
import { useGetCryptosQuery } from '../services/cryptoApi';
import millify from 'millify';
import Loader from '../components/Loader';

const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 :100;
    const {data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
    const [searchTerm, setSearchTerm] = useState('')
    
    useEffect( () => {
        const allCoins = cryptosList?.data?.coins; // must use cryptosList and not cryptos variable here
        const filteredCoins = allCoins?.filter( (coin) => (coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ) )
        setCryptos(filteredCoins)
    }, [cryptosList,searchTerm] )

    if(isFetching) return <Loader/>;
    
    return (
        <>
            {(!simplified) && (
                <div className="search-crypto">
                    <Input placeholder="Search Currency" onChange={(e) => setSearchTerm(e.target.value)}/>
                </div>
            )}
            <Row gutter={[32,32]} className='crypto-card-container'>
                {cryptos?.map( (coin) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.id}>
                        <Link to = {`/cryptodetails/${coin.id}`}>
                            <Card
                                title={`${coin.rank}. ${coin.name}`}
                                extra={<img className='crypto-image' src={coin.iconUrl}/>}
                                hoverable
                            >
                                <p>Price: {millify(coin.price)}</p>
                                <p>Market Cap: {millify(coin.marketCap)}</p>
                                <p>Daily Change: {millify(coin.change)}%</p>
                                
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Cryptocurrencies;
