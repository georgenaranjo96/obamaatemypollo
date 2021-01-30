import styles from '../styles/App.module.css'
import Header from './Header'
import HeadMeta from './HeadMeta'
import H from './H'
import Logo from './Logo'
import Button from './Buttons'

const Layout = ({ children }) => {
    return (
        <div className={styles.rectangular} >
            <HeadMeta />
            <Logo />
            <H title='@ObamaAteMyPollo' />
            <Button />
            <H title='Follow Me Now!' />
        </div>
    )
}

export default Layout
