import Head from 'next/head'
import HeadMeta from '../components/HeadMeta'
import Link from 'next/link'
import Layout from '../components/Layout'
import Header from '../components/Header'
import YT from '../components/YT'
import styles from '../styles/App.module.css'

export default function Home() {
  return (
  <>
    <Header /> 
    <Layout />
    <YT />


    
    <style>{`
    {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #8d6ec7; 
      height: 100%;
      box-sizing: border-box;
    }`} </style> 
      
      <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
          Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
          sans-serif;
        background: #8d6ec7;
          
      }
      * {
        box-sizing: border-box;
      }
      `}
      </style>
    
    </>  
  )
}
