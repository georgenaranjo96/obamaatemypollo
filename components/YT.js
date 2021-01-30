import styles from '../styles/App.module.css'

const Yt = () => {
    return (
    <div className={styles.vid}> 
    <iframe 
    allowFullScreen="1" 
    frameBorder="0"
    width="560"
    height="380" 
    src="https://www.youtube.com/embed/PLoneyXlEHE?autoplay=1"
    ></iframe>
    </div>
    )
}

export default Yt
