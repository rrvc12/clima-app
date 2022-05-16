import '../styles/InfoClima.css'

function InfoClima({ weather }) {
    return (

        <div className='info-contenedor'>
            <div className='info-location'>
                <div className='location-name'>{weather?.location.name}</div>
                <div className='location-country'>{weather?.location.country}</div>
            </div>
            <div className='info-temperature'>
                <img className='temperature-image' src={`http:${weather?.current.condition.icon}`}
                    alt={weather?.current.condition.text} />
                <div className='temperature-text'>
                    <div className='temperature-condition'>{weather?.current.condition.text}</div>
                    <div className='temperature-value'>{weather?.current.temp_c}°</div>
                </div>
            </div>
            <div className='contenedor-mapa'>
                <iframe
                    className='mapa-frame'
                    title="Mapa"
                    src={`https://maps.google.com/?ll=${weather?.location.lat},${weather?.location.lon}&z=10&output=embed`}
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default InfoClima;